

#### 2.6.2 Export floorplan

Clicking this button should export and download a floorplan in a `csv` format. In this file, every row on the layout should be one line in the CSV.

Example format

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


### 2.7 Data persistency

**Persist all form data** (including step progress and floorplan) upon page refresh.  
To support multiple forms in separate tabs, tie data persistence to the browser tab.

## 3 Instructions to the Competitor

### 3.1 Clean Code

Clean code is also an important consideration.

- **Comments**: Include the appropriate amount of comments in your HTML, CSS, and JS files.

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
