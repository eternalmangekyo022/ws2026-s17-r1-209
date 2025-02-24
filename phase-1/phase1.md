

##### 1.2.1.2 Mobile view (hamburger)

On mobile view, a hamburger menu is used to save up space in the header.

- Only the logo and a hamburger icon are visible initially.
- **Clicking** the hamburger button opens a menu styled according to the [design](./media/phase-1/design/design-hamburger.png).
- The menu can be **closed** by **clicking the `X` button or by clicking outside the menu** _(on the blurred background)_.
- Please keep in mind, that you are **not** allowed to use JavaScript in this phase.

#### 1.2.5 Why Us section

- Features a **title** and four **cards** arranged:
  - In a 2x2 grid on desktop.
  - In a single column on mobile.
- Hovering over a card **scales up** the icon without affecting other elements.

#### 1.2.6 Download section

#### 1.2.7 Highlighted Locations section

- The cards display the highlighted locations in a **row**
- On mobile, the cards should be in a **horizontally scrollable list**. When scrolling, the cards should snap into place, meaning the user can't stop scrolling between two cards. You can find a [video demo](./media/phase-1/design/video-explanations/locations-mobile-snap.mov) here.

### 1.3 Responsiveness

- Implement responsive design techniques to ensure the website looks appealing across **all screen sizes.**
- The design is provided for **two specific viewports**: `1440px` and `402px`. We will use these viewports to assess your work.
- **The page should also work seamlessly on other screen sizes.** When shrinking, the elements should not stick to the edge of the screen, and the text should not overflow. The content should be in a **container**, so enlarging the screen keeps the size.
- Use relative size units, so changing the font size in the browser settings also shrinks/enlarges the content accordingly.

### 1.4 Accessibility

You should meticulously **apply accessibility standards** (WCAG) to ensure that the website is inclusive and can be used by all users, regardless of their abilities. This will involve providing alternative text for images, semantic HTML elements, and proper ARIA attributes.

### 1.5 SEO Best Practices

Incorporate SEO best practices into the website's **HTML structure** and **meta tags**, optimizing it for search engine visibility and ranking. This will increase Sudsy's online presence and attract organic traffic.

- Please use **semantic** HTML elements where possible.
- Adding **meta** tags and well-structured content.

### 1.6 Validation

The website will thoroughly test on the latest stable versions of **Google Chrome**. W3C also will be used to check for HTML and CSS validity.  
Lighthouse will be used for accessibility and SEO testing. Every lighthouse aspect should be green on both desktop and mobile.