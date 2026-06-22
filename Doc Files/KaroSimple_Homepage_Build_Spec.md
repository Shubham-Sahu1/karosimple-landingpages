


## ★  KARO SIMPLE

## HOMEPAGE BUILD SPECIFICATION

Complete AI Prompt & Developer Handoff Document

Version 1.0  ·  karosimple.in


## HOW TO USE THIS DOCUMENT

Copy the FULL TEXT PROMPT at the start of each section and paste it into your AI tool (Claude,
ChatGPT, Cursor, Lovable, v0, etc). Fill in the blanks marked [YOUR INPUT] before sending. The
AI will build exactly what is specified.



## SECTION 0

## Master Context Prompt

Paste this ONCE at the start of every AI conversation before any section prompts.
## PASTE THIS FIRST IN EVERY SESSION:

You are building the marketing homepage for Karo Simple (karosimple.in), a QR-code-based review
management SaaS platform built for Indian small and medium businesses — restaurants, salons,
clinics, gyms, retail shops, hotels, auto workshops, and coaching centres.

Core product logic: Happy customers scan a QR code and get routed to leave a real review on
Google, Zomato, Justdial, or other platforms. Unhappy customers see a private feedback form — their
complaint goes to the business owner, not the internet. This protects reputation while growing ratings.

Tech stack: same as project
Design system for dark theme only(light theme will be same as project): Dark theme. Background
#090B14. Primary accent #F5A623 (gold/amber). Secondary accent #7C3AED (violet). Success
green #22C55E. Danger red #EF4444.
Typography:same as project . All text on dark backgrounds — no white backgrounds except explicit
call-out boxes.

Target audience: Indian SMB owners aged 30–55. Non-technical. Decision-makers. Skeptical of
digital tools but motivated by fear of losing customers to competitors with better ratings. Conversion
triggers: rupee pricing always visible, WhatsApp CTAs, free-to-start language, city-level social proof,
simplicity messaging.

Domain: karosimple.in (marketing site). Dashboard: app.karosimple.in. These are separate Vercel
deployments. Do not mix them. All CTAs pointing to signup go to: https://app.karosimple.in/register





## SECTION 1

## Navigation Bar

Fixed top nav. Sticky on scroll. Appears on every page.
## ◆  AI PROMPT — COPY & SEND THIS

Build a fixed navigation bar for karosimple.in with the following exact specification:

LAYOUT: Fixed position, top: 0, full width, z-index 999. Height 68px. Horizontal flex layout — logo on
left, nav links in center, CTA button on right. Padding: 0 60px.

BACKGROUND: rgba(9,11,20,0.85) with backdrop-filter: blur(20px). Border-bottom: 1px solid
## #1E2340.

LOGO: take it from the asset

NAV LINKS (center): 'How It Works', 'Industries', 'Pricing', 'FAQ'. Font: Inter 500, 0.9rem, color
#94A3B8. Hover color: #F1F5F9. No underline. Gap: 32px.

CTA BUTTON (right): Text 'Start Free →'. Background: #F5A623. Color: #000000. Font: Inter 700,
0.85rem. Padding: 10px 22px. Border-radius: 8px. Hover: background #e8970f, translateY(-1px),
box-shadow 0 4px 20px rgba(245,166,35,0.35).

SCROLL BEHAVIOR: On scroll past 80px, add class 'scrolled' which increases backdrop blur to 30px
and reduces height to 60px with transition 0.3s ease.


## ◆  VISUAL SPEC

## Logo
## [REQUIRED]



Nav links
## [REQUIRED]

How It Works · Industries · Pricing · FAQ

CTA button text
## [REQUIRED]

## Start Free →

CTA button link
## [REQUIRED]

https://app.karosimple.in/register

Mobile behaviour
a
Hide nav links. Show logo + hamburger menu icon. Full-screen
slide-in drawer on tap.





## SECTION 2

## Hero Section

Full-viewport opening section with magnetic star particle canvas, headline, subheadline, CTAs,
trust strip.

## ◆  AI PROMPT — COPY & SEND THIS

Build the Hero section for karosimple.in with EXACTLY these specifications:

## CANVAS BACKGROUND — MAGNETIC STARS:

Create a fullscreen HTML5 canvas element behind the hero content. Render 200 star particles. Stars
come in 3 colors: #F5A623 (gold, 30% of stars), #A78BFA (violet, 20%), #FFFFFF (white, 50%).
Larger stars (size > 1.4px) should be drawn as 4-point star shapes. Smaller ones as circles. All stars
twinkle (opacity oscillates via sin wave). MAGNETIC EFFECT: When mouse comes within 140px of a
star's resting position, the star gets attracted toward the cursor — stronger the closer it gets, max
displacement 55px. When mouse leaves, stars smoothly return to their original position using spring
physics (lerp factor 0.06 for return, 0.12 for attraction).

## BACKGROUND BLOBS:

Gold blob: 500x500px, background rgba(245,166,35,0.07), filter blur(90px), top-right corner,
pointer-events none. Violet blob: 400x400px, background rgba(124,58,237,0.08), filter blur(90px),
bottom-left corner.

CONTENT (centered, position relative z-index 2):

Badge: '⭐ India’s Smartest Review Management Platform'. Style: inline-flex pill, background
rgba(245,166,35,0.12), border 1px solid rgba(245,166,35,0.3), color #F5A623, font-size 0.78rem,
font-weight 600, padding 7px 16px, border-radius 100px, text-transform uppercase, letter-spacing
## 0.8px. Margin-bottom 28px.

H1 HEADLINE: 'Turn Every Happy Customer Into a 5-Star Review Automatically.' — 3 lines. Line 1:
'Turn Every Happy Customer'. Line 2: 'Into a' [GOLD GRADIENT] '5-Star Review'. Line 3: [VIOLET
GRADIENT] 'Automatically.' Font: Syne 800. Size: clamp(2.6rem, 5.5vw, 5rem). Letter-spacing: -2px.
Line-height: 1.08. Max-width 820px centered. Gold words use: background linear-gradient(135deg,
#F5A623, #FF8C42), -webkit-background-clip text, -webkit-text-fill-color transparent. Violet word uses:
background linear-gradient(135deg, #A78BFA, #7C3AED).

SUBHEADLINE: 'Customers scan a QR code and leave a real Google review in seconds. Unhappy
ones get routed to private feedback — before they go public.' Font: Inter 400, 1.12rem, color
#94A3B8. 'Unhappy ones get routed to private feedback' should be white (#F1F5F9) and bold.
## Max-width 580px. Margin-bottom 40px.

PRIMARY CTA: 'Start Free Today →'. Background: linear-gradient(135deg, #F5A623, #FF8C42).
Color #000. Font: Inter 800, 1rem. Padding: 15px 34px. Border-radius 10px. Animated pulse:
box-shadow pulses from 0 to 12px spread rgba(245,166,35,0.4) every 2.5s. Animation stops on hover.
Hover: translateY(-2px) scale(1.02), box-shadow 0 8px 32px rgba(245,166,35,0.35). Links to:
https://app.karosimple.in/register

SECONDARY CTA: '▶ Watch 60-Second Demo'. Background transparent. Color #F1F5F9. Font: Inter
600, 1rem. Padding: 15px 28px. Border-radius 10px. Border: 1px solid #1E2340. Hover: border-color
#475569, background #161929. On click: opens YouTube video in modal/lightbox overlay.

TRUST STRIP: Below CTAs, margin-top 48px. Flex row, gap 28px, centered. 4 items, each with a
green dot (•, color #22C55E, box-shadow 0 0 8px #22C55E) and text. Items: '✅ Free to start' '✅
Works on any phone' '✅ Setup in 5 minutes' '✅ No app needed for customers'. Font: Inter 500,
0.85rem, color #94A3B8.


## ◆  COPY — EXACT TEXT TO USE


Badge text
## [REQUIRED]

## ⭐ India's Smartest Review Management Platform


H1 line 1 (white)
## [REQUIRED]

## Turn Every Happy Customer

H1 line 2 (gold)
## [REQUIRED]

Into a 5-Star Review

H1 line 3 (violet)
## [REQUIRED]

## Automatically.

## Subheadline
## [REQUIRED]

Customers scan a QR code and leave a real Google review in
seconds. Unhappy ones get routed to private feedback — before they
go public.


Primary CTA
## [REQUIRED]

## Start Free Today →

Secondary CTA
## [REQUIRED]

## ▶ Watch Demo

Trust item 1
## [REQUIRED]

✅ Free to start


Trust item 2
## [REQUIRED]

✅ Works on phone


Trust item 3
## [REQUIRED]

✅ Setup in 5 minutes


Trust item 4
## [REQUIRED]

✅ No app or login needed for customers


Demo video URL
## [REQUIRED]

## [INSERT YOUR YOUTUBE LINK HERE]





## SECTION 3

## Stats Strip

Full-width strip below hero. Honest process stats — no fabricated customer numbers.
## ◆  IMPORTANT NOTE — READ BEFORE BUILDING

⚠ DO NOT use business count or review count stats. The platform is in early launch phase.
Use process and product stats that are 100% verifiable and cannot be challenged.

Once you have real numbers (500+ businesses, 25,000+ reviews, etc.), replace these with actual
data. Update this section before scaling marketing spend.


## ◆  AI PROMPT — COPY & SEND THIS

Build a full-width stats strip for karosimple.in. It sits immediately below the hero section.

BACKGROUND: linear-gradient(90deg, rgba(124,58,237,0.08), rgba(245,166,35,0.06),
rgba(124,58,237,0.08)). Border-top and border-bottom: 1px solid #1E2340. Padding: 36px 60px.

LAYOUT: Flex row, justify-content center, gap 80px, flex-wrap wrap.

EACH STAT: Centered text. Number on top: Font Syne 800, 2.4rem, gradient text
linear-gradient(135deg, #F5A623, #FF8C42). Label below: Font Inter 500, 0.8rem, color #94A3B8,
letter-spacing 0.5px, margin-top 6px.

ANIMATION: When stats enter viewport, use GSAP or CountUp.js to animate numbers up from 0.
Duration 1.5s, easing power2.out.


## ◆  COPY — 4 STATS TO USE

## Stat 1
## [REQUIRED]

## 5 Min — Average Setup Time

## Stat 2
## [REQUIRED]

## Multiple Platforms Supported

## Stat 3
## [REQUIRED]

0 App Downloads Needed or login by Your Customers or login

## Stat 4
## [REQUIRED]

Take Review in your Local Language







## SECTION 4

## Problem Story — Scroll Animation

Three scroll-triggered frames that walk the user through the emotional journey: the problem, the
math shock, then the solution. This is the highest-impact section on the page.

## ◆  AI PROMPT — COPY & SEND THIS

Build the Problem Story scroll animation section for karosimple.in. This is the most important
section on the page. It must feel cinematic and emotionally resonant.

SECTION WRAPPER: Full width. Background #090B14. Max-width 1200px inner container, 100px
padding top/bottom, 60px left/right.

SECTION HEADER: Eyebrow label 'THE REAL PROBLEM' in gold #F5A623, 0.75rem, bold,
uppercase, letter-spacing 2px, with a 24px gold bar before it. H2: 'Here’s what’s silently killing your
business rating'. Font Syne 800, clamp(1.9rem, 3.5vw, 3rem). Subtext: 'Every satisfied customer who
walks out without leaving a review is a missed opportunity your competitor is winning.' Color
## #94A3B8.

SCROLL ANIMATION BEHAVIOR: Each frame starts with opacity 0, translateY(40px). Use
IntersectionObserver (threshold 0.1) to add class 'visible' which transitions to opacity 1, translateY(0)
over 0.7s ease. Frames alternate left-text/right-visual and right-text/left-visual using 'reverse' direction
toggle.

EACH FRAME: CSS Grid, 2 columns 1fr 1fr, gap 80px, align-items center. Border-bottom 1px solid
#1E2340 (except last frame). Padding 80px 0.

VISUAL CARDS: Background #0F1221, border 1px solid #1E2340, border-radius 20px, padding
32px, min-height 240px. Each card has unique illustrated content described per frame below.


## Frame 1 — The Forgetting Problem
## ◆  COPY
## Tag
## [REQUIRED]

## THE REALITY

Tag color
## [REQUIRED]

#F5A623 gold, background rgba(245,166,35,0.12)

## H3
## [REQUIRED]

Happy customers forget. Angry ones never do.

Body text
## [REQUIRED]

A satisfied customer finishes their meal, gets their haircut, leaves your
clinic — and thinks 'I should leave a review.' But life gets in the way.
They forget. That review? Gone forever. Meanwhile, one bad
experience and an angry customer is pulling out their phone before
they even reach their car.



Visual card content
## [REQUIRED]

Large emoji  centered. Below: 'That was great, I’ll leave a review
later...' in grey. Then:  →  icons. Below: 'Later never comes.' in
muted grey #475569.


Frame 2 — The 1-Star Math
## ◆  COPY
## Tag
## [REQUIRED]

## THE MATH IS BRUTAL

Tag color
## [REQUIRED]

#EF4444 red, background rgba(239,68,68,0.12)

## H3
## [REQUIRED]

1 negative review needs 15 positive ones to recover.

The '15' number
## [REQUIRED]

Highlight in red #EF4444

Body text
## [REQUIRED]

Google's algorithm weighs negative reviews heavily. One 1-star
review drags down your average so much that you need 15 five-star
reviews just to recover. And the vague 'Nice place' or 'Good food'
positive reviews? Google's algorithm treats them as spam signals.
You need real, detailed reviews — and you need them consistently.


Visual card content
## [REQUIRED]

Large red '1★' text (font-size 4rem, color #EF4444). Below: '= 15
five-star reviews just to get back to where you were'. Below that: a red
warning box saying 'Positive reviews that say only "Nice" or "Good" —
Google flags these as low quality. They barely count.'


## Frame 3 — The Solution
## ◆  COPY
## Tag
## [REQUIRED]

## THE SOLUTION

Tag color
## [REQUIRED]

#F5A623 gold


## H3
## [REQUIRED]

One QR code. Real reviews. On autopilot.

Body text
## [REQUIRED]

Place a Karo Simple QR code at your counter, on your table, or in
your invoice. Happy customers scan and get prompted to write a
detailed review on Google. Karo Simple even helps them write it
better. Unhappy customers get a private feedback form — their
complaint comes to you, not the internet.


Visual card content
## [REQUIRED]

Animated QR code square (CSS grid, gold border, glow). Arrow
pointing down labeled 'Scan'. Below: 5 gold stars '★★★★★' with
text-shadow glow. Below: 'Review posted on Google · 45 seconds' in
muted text.





## SECTION 6

Pain Comparison — Google Side by Side

The 'which one would you click?' moment. Two fake Google search results showing a business
without Karo Simple vs one with it.

## ◆  AI PROMPT — COPY & SEND THIS

Build the Pain Comparison section for karosimple.in. This section shows two fake Google
Business Profile search results side by side to let visitors immediately feel the difference
between having and not having reviews.

SECTION BACKGROUND: rgba(239,68,68,0.03). Border-top and border-bottom 1px solid #1E2340.
Wrapper max-width 1200px, padding 100px 60px.

SECTION HEADER: Eyebrow 'THE GOOGLE REALITY'. H2: 'Your customers are choosing between
you and your competitor — right now.' Subtext: 'Every day someone searches for what you offer. This
is what they see.'

COMPARISON GRID: CSS Grid, 3 columns: 1fr auto 1fr. Gap 30px. Align-items center. The center
column is a 'VS' badge: 50px circle, background #161929, border 2px solid #1E2340, font Inter 800,
color #475569.

LEFT CARD (Without Karo Simple): Background #0F1221. Border 1px solid rgba(239,68,68,0.3).
Border-radius 16px. Padding 24px. Contains: red label '❌ Without Karo Simple', business name in
Google-blue #4285F4 'Sharma's Barbershop', star rating row showing 3.6 stars, (14 reviews) in grey.
Recent review text in red. Summary text about vague reviews. Red warning footer text.

RIGHT CARD (With Karo Simple): Background #0F1221. Border 1px solid rgba(34,197,94,0.3).
Box-shadow 0 0 40px rgba(34,197,94,0.06). Same layout but showing 4.8 stars, 187 reviews, a recent
glowing review, consistent 5-star reviews note. Green positive footer text.

CLOSING QUESTION BLOCK: Below the comparison, a full-width card (background #161929, border
1px solid #1E2340, border-radius 20px, padding 36px, text-align center). Large text: 'Which business
are your customers choosing?' Subtext: 'The answer is obvious. The question is — which one is you?'


## ◆  COPY — LEFT CARD (LOSER)

## Label
## [REQUIRED]

## ❌ Without Karo Simple


Business name (Google
blue)

## [REQUIRED]

## Sharma's Barbershop

## Rating
## [REQUIRED]

3.6 ★★★ (14 reviews)

Recent review text (red)
## [REQUIRED]

1★ — Waited 40 minutes, no apology. Will not return.


Other reviews note
## [REQUIRED]

Other reviews: 'Nice', 'Good', 'ok service' — vague, low-quality

Footer text (red)
## [REQUIRED]

⚠ Most people skip this listing

## ◆  COPY — RIGHT CARD (WINNER)

## Label
## [REQUIRED]

## ✅ With Karo Simple


Business name (Google
blue)

## [REQUIRED]

## Verma's Barbershop

## Rating
## [REQUIRED]

4.8 ★★★★★ (187 reviews)

Recent review text
## (green)

## [REQUIRED]

5★ — Amazing haircut, precise beard trim, very friendly staff. Highly
recommend!


Posted timing
## [REQUIRED]

3 hours ago

Other reviews note
## [REQUIRED]

Consistent 5-star reviews with detailed, genuine feedback every week

Footer text (green)
## [REQUIRED]

✓ 9 out of 10 customers click this listing

## ◆  COPY — CLOSING QUESTION BLOCK

## Question (large, Syne
## 800)

## [REQUIRED]

Which business are your customers choosing?

## Subtext
## [REQUIRED]

The answer is obvious. The question is — which one is you?





## SECTION 7

## How It Works — 3 Steps

Clean 3-card grid explaining the product flow. Hover reveals gold top border.
## ◆  AI PROMPT — COPY & SEND THIS

Build the 'How It Works' section for karosimple.in. 3-column card grid.

SECTION: Max-width 1200px, padding 100px 60px. Eyebrow label 'THE PROCESS' in gold. H2 'How
Karo Simple Works'. Subtext 'Three steps. Five minutes to set up. Reviews flowing within the hour.'

CARDS GRID: CSS Grid 3 columns equal width. Gap 24px. Each card: background #0F1221, border
1px solid #1E2340, border-radius 20px, padding 32px 28px. On hover: border-color #F5A623,
translateY(-4px), transition 0.3s. On hover also reveal a 3px gradient top border via ::before
pseudo-element with linear-gradient(90deg, #F5A623, #7C3AED). Each card has: large step number
(font Syne 800, 3rem, color #1E2340 — matches border so it looks watermark-like), emoji icon 2rem,
heading font Inter 700 1.1rem, and body text Inter 400 0.9rem color #94A3B8.


## ◆  COPY — 3 CARDS

Card 1 number
## [REQUIRED]

## 01

Card 1 icon
## [REQUIRED]

## ⚡


Card 1 heading
## [REQUIRED]

## Create Your Account & Add Your Business

Card 1 body
## [REQUIRED]

Sign up free, enter your business name and Google listing. Karo
Simple connects to your Google Business Profile in seconds. No
technical knowledge needed.


Card 2 number
## [REQUIRED]

## 02

Card 2 icon
## [REQUIRED]

## 


Card 2 heading
## [REQUIRED]

Get Your Smart QR Code & Display It


Card 2 body
## [REQUIRED]

Download your unique QR code and place it wherever your customers
are — table tent, counter card, receipt, or your WhatsApp business
message. Print it, display it digitally, done.


Card 3 number
## [REQUIRED]

## 03

Card 3 icon
## [REQUIRED]

## 


Card 3 heading
## [REQUIRED]

Customers Scan → Reviews Appear on Google

Card 3 body
## [REQUIRED]

Happy customers scan, write a real review in 45 seconds. Unhappy
ones see a private feedback form. You get notified. Your rating climbs.
Your competitors wonder what happened.





## SECTION 8

Before vs After Reviews

Side-by-side showing low-quality vs high-quality reviews. Makes the product value viscerally
clear.

## ◆  AI PROMPT — COPY & SEND THIS

Build the Before vs After Reviews section for karosimple.in. Two columns side by side.

SECTION: Max-width 1200px, padding 100px 60px. Eyebrow 'BEFORE VS AFTER'. H2 'The
difference Karo Simple makes'. Subtext 'Real review quality — the type that actually builds trust and
ranks you higher on Google.'

LAYOUT: CSS Grid 2 equal columns, gap 40px.

LEFT COLUMN HEADER: Red pill label '❌ Before Karo Simple'. Background rgba(239,68,68,0.08),
color #EF4444.

LEFT COLUMN CARDS: Each card background #0F1221, border 1px solid rgba(239,68,68,0.2),
border-radius 14px, padding 20px. Each has: avatar (grey circle with initial), reviewer name, time ago,
star row, review text. Review texts are vague and short. Two positive reviews marked with red warning
label '⚠ Low quality — Google may suppress'. One negative review in red.

RIGHT COLUMN HEADER: Green pill label '✅ After Karo Simple'. Background
rgba(34,197,94,0.08), color #22C55E.

RIGHT COLUMN CARDS: Same structure but border rgba(34,197,94,0.2). Avatars have gradient
backgrounds (violet-to-gold). Review texts are long, detailed, genuine-sounding. No warning labels.


## ◆  BEFORE REVIEWS COPY (LEFT COLUMN)

Review 1 reviewer
## [REQUIRED]

Amit S. — 2 months ago

Review 1 stars
## [REQUIRED]

## 5★★★★★

Review 1 text (grey, italic)
## [REQUIRED]

“Nice place.”

Review 1 warning
## [REQUIRED]

⚠ Low quality — Google may suppress

Review 2 reviewer
## [REQUIRED]

Priya M. — 3 months ago

Review 2 stars
## [REQUIRED]

## 4★★★★


Review 2 text (grey, italic)
## [REQUIRED]

“Good food.”

Review 2 warning
## [REQUIRED]

⚠ Treated as spam signal

Review 3 reviewer
## [REQUIRED]

Rohan T. — 4 months ago

Review 3 stars (red)
## [REQUIRED]

## 1★

Review 3 text (red)
## [REQUIRED]

“Pathetic service. Waited 1 hour. Never coming back.”

Review 3 warning
## [REQUIRED]

⚠ Now destroying your rating

## ◆  AFTER REVIEWS COPY (RIGHT COLUMN)

Review 1 reviewer
## [REQUIRED]

Suresh K. — 2 hours ago

Review 1 stars (gold)
## [REQUIRED]

## 5★★★★★

Review 1 text
## [REQUIRED]

“Visited for lunch today and was blown away. The dal tadka was
absolutely authentic, reminded me of home-cooked food. Staff was
warm and the service was quick despite being busy. Will definitely be
coming back with family!”


Review 2 reviewer
## [REQUIRED]

## Neha R. — Yesterday

Review 2 stars (gold)
## [REQUIRED]

## 5★★★★★


Review 2 text
## [REQUIRED]

“Best experience I’ve had in a while. Everything from the ambience to
the food quality was top-notch. The owner was personally attentive.
Recommend to anyone looking for authentic flavours in the area.”





## SECTION 9

## Platform Integrations

Chip/badge grid showing all platforms Karo Simple connects to.
## ◆  AI PROMPT — COPY & SEND THIS

Build the Platform Integrations section for karosimple.in. Section is text-centered.

SECTION: Max-width 1200px, padding 100px 60px, text-align center. Eyebrow 'INTEGRATIONS'. H2
'Works where your customers already are'. Subtext 'One QR code. Multiple platforms. You choose
where reviews land.'

PLATFORM CHIPS: Flex wrap, gap 16px, justify-content center. Each chip: background #0F1221,
border 1px solid #1E2340, border-radius 12px, padding 16px 28px, display flex, align-items center,
gap 12px, font Inter 600 0.9rem. On hover: border-color #F5A623, translateY(-2px), transition 0.2s.


## ◆  COPY — 8 PLATFORM CHIPS

## Chip 1
## [REQUIRED]

##  Google Business


## Chip 2
## [REQUIRED]

##  Zomato


## Chip 3
## [REQUIRED]

##  Swiggy


## Chip 4
## [REQUIRED]

##  Justdial


## Chip 5
## [REQUIRED]

 TripAdvisor


## Chip 6
## [REQUIRED]

##  Practo


## Chip 7
## [REQUIRED]

##  OYO


## Chip 8
## [REQUIRED]

## ⚙ Custom Platform






## SECTION 10

## Industries We Serve

4x2 grid of business type cards. Each shows icon, industry name, and a one-liner about why
reviews matter for that industry.

## ◆  AI PROMPT — COPY & SEND THIS

Build the Industries section for karosimple.in. Full-width section with background to
differentiate it.

OUTER SECTION: Full width. Background #0F1221. Border-top and border-bottom 1px solid
#1E2340. Padding 100px 0. Inner container max-width 1200px margin auto, padding 0 60px.

SECTION HEADER: Eyebrow 'WHO IT’S FOR'. H2 'Built for every Indian business'. Subtext 'If you
have customers, you need reviews. If you need reviews, you need Karo Simple.'

CARDS GRID: CSS Grid 4 columns, gap 16px. Each card: background #090B14, border 1px solid
#1E2340, border-radius 16px, padding 28px 20px, text-align center, cursor default. On hover:
border-color #7C3AED, background rgba(124,58,237,0.12), translateY(-3px), transition 0.25s. Icon
emoji font-size 2.2rem, margin-bottom 14px. Name font Inter 700 0.95rem, margin-bottom 8px.
Tagline font Inter 400 0.8rem, color #94A3B8, line-height 1.5.


## ◆  COPY — 8 INDUSTRY CARDS

## Card 1
## [REQUIRED]

 Restaurants & Dhabas — Get reviews while the meal is still fresh
in their mind


## Card 2
## [REQUIRED]

 Salons & Spas — Happy customers walk out glowing — remind
them to say it online


## Card 3
## [REQUIRED]

 Clinics & Hospitals — Build credibility where patients choose their
doctor


## Card 4
## [REQUIRED]

 Gyms & Studios — Turn members' transformation into your best
marketing


## Card 5
## [REQUIRED]

 Retail Shops — Compete with e-commerce by owning local trust


## Card 6
## [REQUIRED]

 Hotels & Guest Houses — Reviews drive 80% of hotel bookings.
Own them.


## Card 7
## [REQUIRED]

 Auto & Repair Shops — Trust is everything in your industry.
Reviews build it.



## Card 8
## [REQUIRED]

 Coaching & Education — Parents choose based on reputation.
Make yours visible.





## SECTION 11

ROI Calculator

Interactive slider tool. User inputs their business numbers and sees exactly how much more
revenue a better Google rating is worth.

## ◆  AI PROMPT — COPY & SEND THIS

Build an interactive ROI Calculator section for karosimple.in. This is a fully functional
interactive widget, not a static visual.

OUTER SECTION: Background #0F1221. Border-top and border-bottom 1px solid #1E2340. Inner
max-width 1200px, padding 100px 60px. Eyebrow 'ROI CALCULATOR'. H2 'See exactly how much a
better rating is worth to you'.

LAYOUT: CSS Grid 2 columns 1fr 1fr, gap 60px, align-items center.

LEFT COLUMN — INPUTS: 3 sliders. Each slider has a label row (left: label text color #94A3B8,
right: current value in gold #F5A623 bold). Below label: range input with gold thumb, dark track.
Custom styled: track background #1E2340 height 5px border-radius 10px. Thumb: 20px circle,
background #F5A623, box-shadow 0 0 8px rgba(245,166,35,0.35). Gap between sliders 28px.

SLIDER 1: 'Monthly customers'. Range 50 to 2000, step 50, default 200. Shows value as number.

SLIDER 2: 'Average spend per customer (₹)'. Range 100 to 5000, step 100, default 500. Shows value
as ₹XXX.

SLIDER 3: 'Your current Google rating'. Range 1.0 to 4.9, step 0.1, default 3.8. Shows value as X.X
## ★.

Helper note below sliders: 'Studies show businesses going from 3.5★ to 4.5★ see 19% more
customers choosing them.' Font 0.8rem, color #475569.

RIGHT COLUMN — OUTPUT CARD: Background #161929. Border 1px solid rgba(245,166,35,0.2).
Border-radius 20px. Padding 36px. Text-align center.

OUTPUT CARD CONTENT: Small label 'EXTRA REVENUE PER MONTH IF YOU FIX YOUR
RATING' (uppercase, 0.82rem, color #94A3B8). Large number: font Syne 800, 3.5rem, gradient text
#F5A623 to #FF8C42. Below: 'by improving your rating to 4.5★ or above'.

BREAKDOWN TABLE below the main number: 4 rows. Row format: label left (color #94A3B8) / value
right (color #F1F5F9 bold). Dividers between rows 1px solid #1E2340. Rows: 'Customers you could
be gaining' / '+XX/month', 'Extra revenue annually' / '₹XX,XXX', 'Karo Simple PRO plan cost' /
'₹999/month' (this row value in green #22C55E), 'Net gain after plan cost' / '₹XX,XXX' (green).

CALCULATION FORMULA: extraCustomers = round(monthlyCustomers * 0.19). extraRevenue =
extraCustomers * avgSpend. annual = extraRevenue * 12. net = extraRevenue - 999. All values
update live on slider change without page reload.





## SECTION 12

Testimonials (Placeholder Strategy)

This section cannot be built with real data yet. Use the placeholder approach below until real
testimonials are collected.

## ◆  PLACEHOLDER STRATEGY — WHAT TO BUILD NOW

CURRENT STATUS: No real testimonials available. Do NOT use fabricated customer quotes.
Instead, use the 'Who Is This For?' card layout below as a placeholder.

WHEN TO REPLACE: Once you have 3+ real testimonials with names, business type, city, and photo
or initial avatar. Target: 10–15 testimonials from early users given free PRO access in exchange for a
written review.

REPLACEMENT FORMAT: Each testimonial card should include: quote text (2–4 sentences),
reviewer first name + last initial, business type, city, star rating (always 5★), avatar (photo preferred,
initial circle as fallback).


## ◆  AI PROMPT — PLACEHOLDER SECTION TO BUILD NOW

Build a 'Who Is This For?' section for karosimple.in. This serves as the social proof section
until real testimonials are available.

SECTION: Max-width 1200px, padding 100px 60px. Eyebrow 'WHO IT’S FOR'. H2 'Built for business
owners who know their service is good — but their rating doesn’t show it.'

CARDS: 3-column grid. Each card has: emoji icon, business type heading, pain point paragraph (what
problem they face), and an outcome line (what Karo Simple does for them specifically). Background
#0F1221, border 1px solid #1E2340, border-radius 20px, padding 32px. On hover: border-color
#F5A623, translateY(-4px).


## ◆  COPY — 3 PLACEHOLDER CARDS

Card 1 icon + type
## [REQUIRED]

##  Restaurant / Dhaba Owner


Card 1 pain
## [REQUIRED]

You serve 80 customers a day and your food is genuinely great. But
your Google rating is 3.9 because one bad review dragged everything
down and your happy customers never bothered to write anything.


Card 1 outcome
## [REQUIRED]

Karo Simple gets you consistent 5-star reviews from real diners every
single week.


Card 2 icon + type
## [REQUIRED]

##  Salon / Parlour Owner



Card 2 pain
## [REQUIRED]

Your clients love their results and always say they'll recommend you.
But when someone searches for a salon in your area, your competitor
with more Google reviews comes up first.


Card 2 outcome
## [REQUIRED]

Karo Simple turns every happy client into a visible 5-star review that
brings in the next one.


Card 3 icon + type
## [REQUIRED]

##  Clinic / Doctor


Card 3 pain
## [REQUIRED]

Your patients trust you completely and outcomes are great. But one
anonymous 1-star review (probably from a competitor or a dissatisfied
patient you had no control over) is hurting your credibility online.


Card 3 outcome
## [REQUIRED]

Karo Simple floods your profile with real, detailed positive reviews
while routing complaints to you privately.





## SECTION 13

## Pricing Preview

Full 4-tier pricing grid. Monthly pricing shown by default. PRO marked as most popular.
## ◆  AI PROMPT — COPY & SEND THIS

Build the Pricing section for karosimple.in. 4-column pricing card grid.

SECTION: Max-width 1200px, padding 100px 60px. Eyebrow 'PRICING'. H2 'Start free. Scale when
you’re ready.' Subtext 'No credit card required. Cancel anytime. All plans include QR code + Google
integration.'

BILLING TOGGLE: 3 pill buttons. 'Monthly' 'Half-Yearly (Save 15%)' 'Annual (Save 25%)'. Default:
Monthly. Selected pill: background #F5A623, color #000. Unselected: background transparent, border
1px solid #1E2340, color #94A3B8. Switching updates all prices dynamically via JS.

GRID: 4 columns equal width, gap 20px, margin-top 40px. All cards: background #0F1221, border 1px
solid #1E2340, border-radius 20px, padding 28px 24px. PRO card: border-color #F5A623,
box-shadow 0 0 40px rgba(245,166,35,0.08). PRO card also has a badge above it (position absolute
top -12px, left 50%, translateX(-50%)) saying '⭐ Most Popular' — background
linear-gradient(135deg, #F5A623, #FF8C42), color #000, font 700 0.7rem, padding 4px 16px,
border-radius 100px.

EACH CARD: Tier label (0.75rem, bold, uppercase, color #475569). Price (font Syne 800, 2.2rem,
line-height 1) with '/mo' suffix (1rem, color #475569). Description text (0.82rem, color #94A3B8).
Feature list using real checkmarks (color #22C55E bold). CTA button full width.

CTA BUTTONS: Free card: 'Start Free' (transparent, border 1px #1E2340). Starter card: 'Get Started
→' (same, border). PRO card: 'Get Started →' (background gold gradient, color #000). Agency card:
'Talk to Us' (transparent, border).


## ◆  COPY — 4 PRICING TIERS

FREE — Price
## [REQUIRED]

## ₹0 /month

FREE — Description
## [REQUIRED]

Perfect to get started

FREE — Features
## [REQUIRED]

1 Business Location · 1 QR Code · Up to 25 reviews/month · Google
## Integration · Basic Dashboard


STARTER — Price
## [REQUIRED]

₹499 /month (Monthly) | ₹424 /month (Half-Yearly) | ₹374 /month
(Annual)


STARTER — Description
## [REQUIRED]

For growing businesses


STARTER — Features
## [REQUIRED]

1 Business Location · 3 QR Codes · Up to 100 reviews/month · All
Platforms · Private Feedback Filter · AI Review Suggestions


PRO — Price
## [REQUIRED]

₹999 /month (Monthly) | ₹849 /month (Half-Yearly) | ₹749 /month
(Annual)


PRO — Description
## [REQUIRED]

For serious growth

PRO — Features
## [REQUIRED]

Up to 3 Locations · Unlimited QR Codes · Unlimited Reviews ·
Advanced Analytics · Review Response AI · Priority Support ·
WhatsApp Chat Support


AGENCY — Price
## [REQUIRED]

## Custom

AGENCY — Description
## [REQUIRED]

For agencies & franchise chains

AGENCY — Features
## [REQUIRED]

Unlimited Sub-Businesses · Shared Resource Pool · Super-Admin
Dashboard · White-Label Option · Dedicated Account Manager ·
## Custom Integrations





## SECTION 14

FAQ — Objection Killer

6 accordion questions that remove the biggest purchase blockers. Each question kills one
specific objection.

## ◆  AI PROMPT — COPY & SEND THIS

Build an FAQ accordion section for karosimple.in. 6 questions. Max-width 760px, centered in a
1200px section.

SECTION: Max-width 1200px, padding 100px 60px. Eyebrow 'FAQ'. H2 'Questions we hear all the
time'.

ACCORDION ITEMS: Each item background #0F1221, border 1px solid #1E2340, border-radius
14px, overflow hidden. Question row: padding 20px 24px, font Inter 600, flex row between question
text and '+' icon, cursor pointer. On hover: color #F5A623. On open: max-height animation 0 to auto
(use max-height transition 0.4s ease). Answer: padding 0 24px 20px, color #94A3B8, line-height 1.7,
font-size 0.92rem. '+' icon rotates to '×' when open (transform rotate(45deg), color #F5A623). Only
one accordion open at a time.


## ◆  COPY — 6 FAQ ITEMS

## Q1
## [REQUIRED]

Will my customers actually scan the QR code?

## A1
## [REQUIRED]

Absolutely — QR code usage in India has exploded since UPI
payments made scanning second nature. If your customers can pay
via PhonePe or Paytm QR, they'll scan your review QR without a
second thought. Most businesses see 60–80% of engaged customers
scan within the first week.


## Q2
## [REQUIRED]

What happens if a customer is unhappy?

## A2
## [REQUIRED]

Unhappy customers are shown a private feedback form instead of
being directed to Google. Their complaint comes straight to your
dashboard, giving you a chance to resolve the issue before it
becomes a public 1-star review. This alone saves many businesses
from reputation damage every week.


## Q3
## [REQUIRED]

Is this allowed by Google? Will reviews get removed?

## A3
## [REQUIRED]

100% Google-compliant. Karo Simple does not generate fake reviews.
We help real customers who genuinely visited your business write

better and more detailed reviews. Every review is authentic. We also
help them avoid the vague 1–2 word reviews that Google's algorithm
may suppress.


## Q4
## [REQUIRED]

How long does setup take?

## A4
## [REQUIRED]

Under 5 minutes from signup to having your QR code ready to print.
You don't need a developer, technical knowledge, or even a laptop —
our mobile-friendly dashboard handles everything. Most business
owners set it up themselves during their lunch break.


## Q5
## [REQUIRED]

Can I manage multiple branches or locations?

## A5
## [REQUIRED]

Yes — the PRO plan supports up to 3 locations, and our Agency plan
is purpose-built for businesses with many branches or agencies
managing multiple clients. Each location gets its own QR code,
dashboard, and review tracking.


## Q6
## [REQUIRED]

What if I don't have any reviews yet?

## A6
## [REQUIRED]

That's actually the best time to start. Building from zero is far easier
than recovering from negative reviews. Many of our best-performing
customers started with 0 reviews and hit 50+ five-star reviews within
their first month.





## SECTION 15

Final CTA — The Hard Close

Full-width urgency section. The last thing visitors see before they leave. Must create maximum
urgency to convert.

## ◆  AI PROMPT — COPY & SEND THIS

Build the Final CTA section for karosimple.in. This is the last section before the footer. It must
feel urgent and emotionally compelling.

BACKGROUND: Full width. radial-gradient(ellipse at 50% 0%, rgba(245,166,35,0.12) 0%, transparent
70%), radial-gradient(ellipse at 50% 100%, rgba(124,58,237,0.1) 0%, transparent 70%). Border-top
1px solid #1E2340. Text-align center. Padding 120px 60px.

URGENCY PILL: '⚠ Your competitors are collecting reviews right now'. Inline-block. Background
rgba(239,68,68,0.08), border 1px solid rgba(239,68,68,0.2), color #EF4444, font 0.82rem 600,
padding 8px 20px, border-radius 100px, margin-bottom 32px.

H2 (large): 'Don’t let a bad rating cost you your business.' Line 2: 'cost you your business.' — this line
in gold gradient. Font Syne 800, clamp(2.2rem, 4vw, 4rem), letter-spacing -1.5px, max-width 700px
centered.

SUBTEXT: 'Every day you wait is another day your competitor pulls ahead on Google. Start free in 5
minutes — no credit card, no lock-in.' Color #94A3B8, font-size 1.1rem, max-width 480px centered,
margin-bottom 40px.

CTA BUTTONS: Row, gap 16px, centered. Primary: 'Start Free Today — No Credit Card →' same
gold gradient style, font-size 1.05rem, padding 17px 40px. Secondary: 'See Pricing Plans'
transparent/border style.

TRUST STRIP below buttons, margin-top 28px: '✅ Free plan forever available' '✅ Cancel anytime'
'✅ 5-minute setup' '✅ 100% Google-compliant'.


## ◆  COPY — EXACT TEXT

Urgency pill
## [REQUIRED]

⚠ Your competitors are collecting reviews right now


H2 line 1 (white)
## [REQUIRED]

Don’t let a bad rating

H2 line 2 (gold gradient)
## [REQUIRED]

cost you your business.

## Subtext
## [REQUIRED]

Every day you wait is another day your competitor pulls ahead on
Google. Start free in 5 minutes — no credit card, no lock-in.


Primary CTA
## [REQUIRED]

## Start Free Today — No Credit Card →


Secondary CTA
## [REQUIRED]

## See Pricing Plans

Trust item 1
## [REQUIRED]

✅ Free plan forever available


Trust item 2
## [REQUIRED]

✅ Cancel anytime


Trust item 3
## [REQUIRED]

✅ 5-minute setup


Trust item 4
## [REQUIRED]

## ✅ 100% Google-compliant





## SECTION 16

## Quick Reference — Colors, Fonts & Links

Copy-paste reference for your AI or developer.
## Color Palette
## Background (deep)
## [REQUIRED]

## #090B14

## Background (card)
## [REQUIRED]

## #0F1221

## Background (raised)
## [REQUIRED]

## #161929

## Border
## [REQUIRED]

## #1E2340

Primary Accent (Gold)
## [REQUIRED]

## #F5A623

Secondary Accent (Violet)
## [REQUIRED]

## #7C3AED

Success (Green)
## [REQUIRED]

## #22C55E

Danger (Red)
## [REQUIRED]

## #EF4444

## Text Primary
## [REQUIRED]

## #F1F5F9

## Text Secondary
## [REQUIRED]

## #94A3B8

## Text Muted
## [REQUIRED]

## #475569


## Typography
Heading font
## [REQUIRED]

Syne (weight 700, 800) — import from Google Fonts

Body font
## [REQUIRED]

Inter (weight 400, 500, 600, 700, 800) — import from Google Fonts

## Google
## Fonts
import

## [REQUIRED
## ]

https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&famil
y=Syne:wght@700;800&display=swap


## Key Links
Marketing site
## [REQUIRED]

https://karosimple.in

## Dashboard
## [REQUIRED]

https://app.karosimple.in

Register link (all primary
CTAs)

## [REQUIRED]

https://app.karosimple.in/register

Demo video
## [REQUIRED]

## [INSERT YOUTUBE URL]

Section Build Order (Recommended)
Phase 1 (Unblock legal)
## [REQUIRED]

Build legal pages first (Privacy Policy, Terms, Refund Policy,
Grievance) to unblock Google OAuth and Razorpay


Phase 2 (Core homepage)
## [REQUIRED]

Nav → Hero → Stats → Ticker → How It Works → Final CTA

Phase 3 (Story + pain)
## [REQUIRED]

Problem Story Scroll → Pain Comparison → Before vs After


Phase 4 (Credibility)
## [REQUIRED]

## Industries → Platforms → Placeholder Testimonials

Phase 5 (Conversion)
## [REQUIRED]

ROI Calculator → Pricing → FAQ

Phase 6 (Replace later)
## [REQUIRED]

Swap placeholder testimonials with real ones once collected




Complete project is based on this design system you can also follow this to maintain
consistency


## Design System — Tokens,
## Typography & Spacing
## 3.1 Colour Palette
Extracted from the Karo Simple logo: the "K" mark uses a dark forest green (#3DAA72 range)
with a warm dark navy (#1B2A4A — these become the brand's two pillars. Green = action,
growth, trust. Navy = authority, depth, professionalism.

## Token Name

## Hex
## Value

## RGB

## Usage

## --ks-green

## #3DAA72

## 61, 170, 114

Primary CTA buttons, checkmarks,
accents, active states

## --ks-green-dark

## #2D8A5A

## 45, 138, 90

Button hover state, green-dark text on
white

## --ks-green-light

## #EFF6F1

## 239, 246,
## 241

Success backgrounds, green-tinted cards


## --ks-navy

## #1B2A4A

## 27, 42, 74

Primary headings, hero background,
footer background

## --ks-navy-mid

## #253559

## 37, 53, 89

Secondary text on dark backgrounds,
hover states

## --ks-navy-light

## #3D4F72

## 61, 79, 114

Tertiary dark text, icons on dark bg

## --ks-white

## #FFFFFF

## 255, 255,
## 255

Card backgrounds, text on dark

## --ks-off-white

## #F5F7FA

## 245, 247,
## 250

Page backgrounds, alternating sections

## --ks-muted

## #6B7A99

## 107, 122,
## 153

Body text, captions, placeholder text

## --ks-border

## #EEF1F5

## 238, 241,
## 245

Card borders, dividers, input borders

## --ks-red-soft

## #FEF2F2

## 254, 242,
## 242

Pain point section background

## --ks-red

## #EF4444

## 239, 68,
## 68

Negative indicators (never CTAs)

## --ks-whatsapp

## #25D366

## 37, 211, 102

WhatsApp button ONLY — never reuse

## 3.2 Typography
Primary typeface: Inter Google Fonts, self-hosted in /public/fonts/ for performance). Inter
is chosen because it renders beautifully in both English and Devanagari-adjacent
contexts, feels modern without being cold, and has excellent legibility on budget Android
screens — the primary India target device.

## Token

## Size

## Weight

## Line
## Height

## Usage

## --type-hero

## 56px /
## 3.5rem

## 800
ExtraBold

## 1.1

Hero H1 on desktop

## --type-hero-mo
bile

## 32px / 2rem

## 800
ExtraBold

## 1.15

Hero H1 on mobile (<
## 640px)

## --type-h1

## 44px /
## 2.75rem

## 700 Bold

## 1.2

Page-level H1 About,
## Pricing)

## --type-h2

## 32px / 2rem

## 700 Bold

## 1.25

Section headings

## --type-h3

## 22px /
## 1.375rem

## 600
SemiBold

## 1.35

Card titles, subsection
headings


## --type-body-lg

## 18px /
## 1.125rem

## 400 Regular

## 1.7

Hero subheadline,
prominent body

## --type-body

## 16px / 1rem

## 400 Regular

## 1.65

Primary body text, feature
descriptions

## --type-body-sm

## 14px /
## 0.875rem

## 400 Regular

## 1.6

Captions, meta info, footer
text

## --type-label

## 12px /
## 0.75rem

## 600
SemiBold

## 1.5

Overlines, tags, badges —
uppercase

## --type-cta

## 16px / 1rem

## 600
SemiBold

## 1

Button text — never below
## 16px

## --type-price

## 48px / 3rem

## 800
ExtraBold

## 1

Pricing numbers ₹999

## 3.3 Spacing Scale
Use the Tailwind default spacing scale. The following are the canonical spacing values
used in marketing sections — do not deviate:

## Usage

## Tailwind Class

px Value

## Notes

Section vertical
padding (desktop)

py-24

## 96px

Standard for all full-width
sections

Section vertical
padding (mobile)

py-14

## 56px

Override with md:py-24

Container max-width

max-w-7xl
mx-auto

## 1280px

All content constrained here

Container horizontal
padding

px-4 md:px-8
lg:px-16

## 16/32/64p
x

Scale with breakpoint

Card padding (desktop)

p-8

## 32px

Feature cards, pricing cards

Card padding (mobile)

p-5

## 20px

md:p-8 override

Grid gap (cards)

gap-6 lg:gap-8

## 24/32px

Feature + pricing card grids

Stack gap (body copy)

space-y-4

## 16px

Paragraphs within sections

Nav height (desktop)

h-16

## 64px

Sticky nav fixed height

Nav height (mobile)

h-14

## 56px

Smaller touch area on mobile

## 3.4 Border Radius

## Component

## Class

## Value

## Never Use

CTA Buttons

rounded-full

## 9999px

rounded-none (too harsh)

## Feature Cards

rounded-2xl

## 16px

rounded-sm (too subtle)

## Pricing Cards

rounded-2xl

## 16px


## Input Fields

rounded-xl

## 12px


## Badges / Pills

rounded-full

## 9999px


Section CTA Banner

rounded-3xl

## 24px (if
contained)


## Testimonial Cards

rounded-2xl

## 16px


## Mobile Drawer

rounded-no
ne

## 0px

Rounded on drawer would look odd

## 3.5 Shadow System
## Name

CSS Value

## Usage

shadow-sm

0 1px 2px rgba(0,0,0,0.05

Default card resting state

shadow-card

0 4px 16px rgba(27,42,74,0.08

Elevated card hover state

shadow-pricing

0 8px 32px rgba(27,42,74,0.14

Recommended pricing card

shadow-nav

0 2px 8px rgba(0,0,0,0.06

Sticky nav on scroll

shadow-cta

0 4px 20px rgba(61,170,114,0.35

Green CTA button hover

Add shadow-card and shadow-pricing as custom utilities in tailwind.config.ts under
theme.extend.boxShadow.

3.6 Animation Tokens GSAP
## Token

## Value

## Usage

## --ease-out-expo

power4.out

Hero text reveal, section entrances

## --ease-in-out

power2.inOut

Pricing toggle, FAQ accordion

## --ease-bounce

back.out(1.2)

Feature card hover lift, CTA pulse

## --duration-fast

## 0.3s

Hover states, micro-interactions

## --duration-medium

## 0.6s

Card reveals, section entrances


## --duration-slow

## 1.0s

Hero sequence, page transitions

## --stagger-cards

## 0.08s

Stagger delay between card reveals

## --stagger-lines

## 0.12s

Stagger delay between text line reveals


End of Document  ·  Karo Simple Homepage Build Spec v1.0
