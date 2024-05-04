import React from "react";

const mainPage = () => {
  return (
    <div className="bg-neutral-dark-grey md:p-6 rounded-lg">
      <div className="flex flex-col justify-center">
        <img
          src="avatar-jessica.jpeg"
          alt="avatar"
          className="block mx-auto h-24 m-2 rounded-full "
        />
      </div>
      <div className="text-center m-4">
        <h1 className="text-3xl font-base text-neutral-white">
          Jessica Randall
        </h1>
        <h2 className="text-sm text-primary mt-2">London, United Kingdom</h2>
        <div>
          <p className="text-sm mt-4 text-neutral-white">
            &quot;Front-end developer and avid reader.&quot;
          </p>
        </div>
      </div>
      <div className="flex flex-col px-4 py-2">
        <div className="bg-neutral-grey rounded-lg p-4 text-center">
          <p className="text-sm text-neutral-white">GitHub</p>
        </div>
      </div>
      <div className="flex flex-col px-4 py-2">
        <div className="bg-neutral-grey rounded-lg p-4 text-center">
          <p className="text-sm text-neutral-white">Frontend Mentor</p>
        </div>
      </div>
      <div className="flex flex-col px-4 py-2">
        <div className="bg-neutral-grey rounded-lg p-4 text-center">
          <p className="text-sm text-neutral-white">LinkedIn</p>
        </div>
      </div>
      <div className="flex flex-col px-4 py-2">
        <div className="bg-neutral-grey rounded-lg p-4 text-center">
          <p className="text-sm text-neutral-white">Twitter</p>
        </div>
      </div>
      <div className="flex flex-col px-4 py-2">
        <div className="bg-neutral-grey rounded-lg p-4 text-center">
          <p className="text-sm text-neutral-white">Instagram</p>
        </div>
      </div>
    </div>
  );
};

export default mainPage;

/* 

# Front-end Style Guide

Jessica Randall
London, United Kingdom
"Front-end developer and avid reader."

GitHub
Frontend Mentor
LinkedIn
Twitter
Instagram

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

> 💡 These are just the design sizes. Ensure content is responsive and meets WCAG requirements by testing the full range of screen sizes from 320px to large screens.

## Colors

### Primary

- Green: hsl(75, 94%, 57%)

### Neutral

- White: hsl(0, 0%, 100%)
- Grey: hsl(0, 0%, 20%)
- Dark Grey: hsl(0, 0%, 12%)
- Off Black: hsl(0, 0%, 8%)

## Typography

### Body Copy

- Font size (paragraph): 14px

### Font

- Family: [Inter](https://fonts.google.com/specimen/Inter)
- Weights: 400, 600, 700

> 💎 [Upgrade to Pro](https://www.frontendmentor.io/pro?ref=style-guide) for design file access to see all design details and get hands-on experience using a professional workflow with tools like Figma.

*/
