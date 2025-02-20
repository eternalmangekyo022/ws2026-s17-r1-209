#### 2.1.2 Steps

- Four step buttons visually indicate progress.
- **Clickable Steps:** Completed and current steps _(indicated by a filled white button)_ are clickable, allowing users to navigate backwards.
- **Disabled Steps:** Future steps are marked with a gray outline and not clickable.
- On the **fourth step**, all step buttons turn white, display a black checkmark, and are disabled.

### 2.2 Footer

- **Next Button:** triggering validation. If validation errors exist, navigation is blocked, and error messages are displayed. More about validation later.

Navigating back and forth should persist the filled data

### 2.4 Step 2: Floorplan Design

Design the laundromat layout using a grid-based tool.

#### 2.4.1 Toolbar

Includes six **draggable** items:

- Washer (8 kg)
- Washer (11 kg)
- Dryer (18 kg)
- Dryer (25 kg)
- Folding Table
- Waiting Area

Please refer to the video example and the provided HTML template on how they should look (colors, icons, etc).

**Drag and drop**

- The user is able to **drag an item** from the toolbar and drop it on a tile of the grid. When the drop is completed, the tool is shown in the grid.
- The user is able to use a tool multiple times.
- When the user drags a tool over a grid tile, the tile's opacity is set to 0.25, **indicating that it's possible to drop**.

#### 2.4.2 Grid

- The grid consists of 6 rows and 5 columns. However, it should be super easy to modify these values in the code, so please create and use constant variables, to allow fine-tuning the grid later on.
- **Interactions:**
  - Drag-and-drop tools onto grid tiles (replacing existing items)
  - Single-click to clear a tile.
  - Double-click to add a wall.
  - Right-click to mark an entrance. _(the green box)_

#### 2.4.3 Validation

- **Rule:** Machines must be placed adjacent to a wall (grid edge or user-added walls).
- Trigger validation when the user clicks Next. Display errors as an alert box between the toolbar and grid.
- When the error is fixed, it should be displayed immediately for instant feedback
- Error message: **"Washers or Dryers can only be next to a wall."**

In this example, the checkboxes mark the places where machines can be placed on.

<img src="./media/phase-2/examples/step-2-machines-allow.png" width="500">

### 2.5 Step 3: Extras

Gathers additional amenities and services for the location.

#### 2.5.1 Amenities (Checkboxes)

- Free Wi-Fi
- Accessible entry
- Lounge Area
- Background music
- Personal customer service

The users can select as many checkboxes as they want.

#### 2.5.2 Parking Difficulty (Radio Buttons)

- Easy
- Medium
- Hard

Easy should be selected by default.

#### 2.5.3 Validation

**No validation** is required for this step.

### 2.6 Step 4: Finish Screen

The final step provides export options and allows the user to restart the process.

Since the user may use these information in their own system as well, we should provide them an opportunity to save or export their form submission.

#### 2.6.1 Copy form values

Copy all form data to the clipboard as a JSON object (excluding the floorplan).

```json
{
  "name": "Test location",
  "description": "Test description :)",
  "postalCode": 1000,
  "city": "Budapest",
  "address": "Test street 1",
  "from": "07:00",
  "to": "23:00",
  "openAt": "Every Day",
  "freeWiFi": true,
  "accessibleEntry": true,
  "loungeArea": false,
  "backgroundMusic": false,
  "customerService": false,
  "parking": "Medium"
}
```

#### 2.6.2 Export floorplan

Clicking this button should export and download a floorplan in a `csv` format. In this file, every row on the layout should be one line in the CSV.

Example format:

```csv
Dryer (18 kg),-,Washer (11 kg),Washer (8 kg),Washer (8 kg)
Dryer (25 kg),-,-,-,-
Dryer (25 kg),-,Folding Table,Folding Table,-
Wall,-,Folding Table,Wall,-
-,-,-,-,-
-,Entrance,Waiting Area,Waiting Area,Waiting Area
```

Please note that the empty tiles are represented with a dash (`-`).

The name of the file should be `floorplan.csv`.

#### 2.6.3 Start over

A Start Over button clears all inputs and resets the form to Step 1.

### 2.7 Data persistency

**Persist all form data** (including step progress and floorplan) upon page refresh.  
To support multiple forms in separate tabs, tie data persistence to the browser tab.

### 2.8 Library, Framework, and NPM Module Limitations

- You are allowed to use only the following JavaScript frameworks: **React**, **Angular**, **Vue**
- Create the project using one of the following commands:
  - React: `npm vite@latest phase-2-src -- --template react`
  - Vue: `npm vite@latest phase-2-src -- --template vue`
  - Angular: `ng new phase-2-src`
- You may use these frameworks with TypeScript (e.g. `npm vite@latest phase-2-src -- --template react-ts` )
- You are **NOT** allowed to use any other JS or CSS frameworks or libs (e.g Next.js, Bootstrap, Tailwind etc.)
- You can use npm modules installed by the default project creation process of the selected JS framework (see above). It is also **forbidden** to use additional npm modules in your JS framework project.

## 3 Instructions to the Competitor

### 3.1 Clean Code

Clean code is also an important consideration.

- **Comments**: Include the appropriate amount of comments in your HTML, CSS, and JS files.
- **Consistent naming**: Use meaningful, descriptive names that follow a consistent style, such as camelCase for JavaScript or kebab-case for CSS.
- **Modularity and Reusability**: Break code into reusable modules or components to reduce redundancy and simplify maintenance.
- **Smart framework usage**: Use frameworks and libraries efficiently to write concise, effective code that avoids unnecessary dependencies.

### 3.2 Git usage

Proper use of Git is crucial for maintaining a clean, organized, and collaborative development workflow. Follow these guidelines to ensure professionalism:

- **Meaningful Commit Messages:** Write clear, concise commit messages that describe what changes were made and why. Avoid generic messages like `"fix"` or `"update"`.
- **Frequent Commits:** Commit changes regularly to maintain a logical history of your progress. Avoid large, monolithic commits that bundle unrelated changes together.

### 3.3 Project structure and deployment

#### 3.3.1 Folders

- **Phase 1:** Place all your work files in the `phase-1` folder.
- **Phase 2:** Organize your source files in the `phase-2-src` folder, and store the built project in the `phase-2` folder. This built version will be used for deployment.

#### 3.3.2 Deployment

Netlify is a **free service** for hosting static websites, making it **easy to share** your project with the public. The platform automatically publishes updates when linked to a Git repository.

1. **Register** for an account on Netlify.
2. Create a new application for your website and link it to your GitHub repository.
3. Choose a hostname for your application.
4. Document the chosen hostname on the first line of your repository's `README.md` file, followed by your ID on the second line and your name on the third line.

xxx.netlify.com
209
Tibor Fazekas

Each phase of your project should be accessible via the following paths:

- `/phase-1` for the **Phase 1** implementation.
- `/phase-2` for the **Phase 2** implementation.

By adhering to the folder structure described above, this setup will work seamlessly.

Additionally, include a basic `index.html` file in the root of your project. This file should serve as a simple page linking to the two phases. The `index.html` file does not require any styling and **will not be assessed**.
