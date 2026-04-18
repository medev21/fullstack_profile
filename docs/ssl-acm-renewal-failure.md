# ACM Certificate Renewal Failure — Namecheap + Route 53 Setup

## Background

When the domain was first set up, the validation flow required two separate DNS configurations in Namecheap:

1. **NamecheapBasicDNS** — used to add the ACM CNAME validation record so the certificate could be issued.
2. **Custom DNS** — used after the hosted zone was created in Route 53; the Route 53 nameservers were pasted here so that CloudFront could serve the site via the custom domain.

The problem is that switching to Custom DNS (Route 53) means Namecheap's BasicDNS no longer serves the CNAME validation record. If AWS tries to auto-renew the certificate and looks for that CNAME through Route 53, it will fail unless the CNAME validation record also exists inside the Route 53 hosted zone.

---

## Why Auto-Renewal Fails

ACM auto-renews by re-validating the domain using the same CNAME record from the initial issuance. If the domain's active nameservers are Route 53 (Custom DNS in Namecheap), ACM will query Route 53 for the CNAME — **not** Namecheap's BasicDNS.

If the CNAME validation record was only added to Namecheap's BasicDNS and never to Route 53, ACM cannot find it, and renewal fails.

---

## The Accidental Fix (What Worked)

Switching Namecheap from **Custom DNS → NamecheapBasicDNS** caused Namecheap's DNS to become active again. Since the original CNAME validation record was still there from the initial setup, ACM was able to find it and successfully renew the certificate — without any changes in AWS.

After about an hour, the certificate status changed to **Issued**.

---

## The Problem That Followed

After switching back from NamecheapBasicDNS to Custom DNS, Namecheap cleared the previously saved Route 53 nameserver entries. This means the domain no longer points to Route 53, which breaks the CloudFront-hosted site.

**Yes, this is an issue.** Without the Route 53 nameservers active, the domain will not resolve through Route 53, and your CloudFront distribution will not be reachable via the custom domain.

---

## Immediate Fix After Switching Back to Custom DNS

After switching Namecheap back to **Custom DNS**, re-enter the Route 53 nameservers manually:

1. Go to [Route 53 → Hosted Zones](https://console.aws.amazon.com/route53/v2/hostedzones).
2. Open the hosted zone for your domain.
3. Find the **NS record** — it contains 4 nameservers (e.g., `ns-123.awsdns-45.com`).
4. Go to Namecheap → Domain → **Nameservers → Custom DNS**.
5. Paste all 4 Route 53 nameservers back in.
6. Save. Propagation may take a few minutes to a few hours.

---

## Permanent Fix (Prevents Future Renewal Failures)

The root cause is that the ACM CNAME validation record lives in Namecheap's BasicDNS but **not** in Route 53. Since the domain uses Route 53 as its active DNS, ACM cannot find the record at renewal time.

**Add the ACM CNAME validation record to Route 53:**

1. Go to **ACM → Your Certificate → Domains**.
2. Copy the **CNAME name** and **CNAME value** for each domain (e.g., `example.com`, `www.example.com`).
3. Go to **Route 53 → Hosted Zones → Your Domain → Create Record**.
4. Fill in the form:
   - **Record name**: paste the CNAME name from ACM, but **remove the root domain suffix at the end**. For example, if ACM gives you `_91jklajfklasjfe89r6779469.example.com`, only paste `_91jklajfklasjfe89r6779469`. Route 53 is already inside the `example.com` hosted zone and will append the domain automatically — pasting the full value would result in a broken double-domain like `_91jklajfklasjfe89r6779469.example.com.example.com`.
   - **Record type**: select **CNAME** from the dropdown (not A, not AAAA).
   - **Routing policy**: leave as **Simple routing**.
   - **Value**: paste the full CNAME value from ACM exactly as shown.
   - **TTL**: 300
5. Click **Create records**.
6. Repeat for each domain listed in the certificate (e.g., once for `example.com`, once for `www.example.com`).

Once the CNAME record is in Route 53, ACM can validate through Route 53 and auto-renew without any manual intervention going forward. **You will no longer need to switch back to NamecheapBasicDNS.**

---

## Summary: Correct Long-Term State

| Config | Value |
|---|---|
| Namecheap Nameservers | Custom DNS → Route 53 nameservers |
| Route 53 Hosted Zone | Contains A/CNAME records for CloudFront + ACM validation CNAME |
| ACM Certificate | DNS validated, CNAME record present in Route 53 |

With this setup, ACM auto-renewal will work correctly without touching Namecheap.

---

## References

- [Stack Overflow: CNAME entry not working on Namecheap using ACM](https://stackoverflow.com/questions/51198472/cname-entry-not-working-on-namecheap-using-amazon-certificate-manager)
- [YouTube: SSL Setup with CloudFront (Code with Vlad)](https://www.youtube.com/watch?v=9WPlC5RKfjs)
