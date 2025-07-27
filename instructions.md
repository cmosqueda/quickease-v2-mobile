This contains guide/rules for the development of this app.

---

# 1. Codebase Structure

```
quickease-mobile/
├── app/
│   ├── _layout.tsx                   # the app's root layout
│   ├── index.tsx                     # the entrypoint
│   └── *other screen routes*/        # other screen routes based on expo's file-based routing
├── assets/
│   └── images/
├── components/
│   └── ui/
│       ├── *component name*/         # gluestack components
│       └── gluestack-ui-provider/    # directory that contains gluestack-related files
│           └── config.ts             # the config for gluestack provider
│           └── index.tsx             # the entrypoint defined for gluestack - native
│           └── index.web.tsx         # the entrypoint defined for gluestack provider - web
│           └── script.ts             # the script for gluestack provider's themes
├── hooks/                            # contains hooks
├── types/                            # contains types for globally shared types
├── navigation/                       # contains files related to navigation
├── tailwind.config.js                # Tailwind + Gluestack NativeWind plugin
├── global.css                        # Tailwind base/utilities
├── babel.config.js                   # Babel config (for NativeWind)
├── metro.config.js                   # Metro config (for NativeWind)
├── nativewind-env.d.ts
├── package-lock.json
├── package.json
├── README.md
├── tailwind.config.js
└── tsconfig.json

```

**Let's try to dissect each folder directory!**

- `app/` - This contains all screen components of this app. Since expo works on a file-based routing, routing through screens is pretty straightforward. Refer to expo's official docs for more info.
- `assets/` - Contains your app's assets like static files, images, etc. You know about this already.
- `components/` - This contains all gluestack components, you can also place here your own custom components.
  - `ui/` - contains all gluestack ui components
    - `gluestack-ui-provider/` - contains all gluestack provider files
    - `*component name*/` - this contains all added gluestack components. If you've already worked with **shadcn ui**, it works the same like that.
- `hooks/` - This contains all custom react hooks you've set up for this app.
- `navigation/` - This contains all files related to routing.
- `types/` - This contains all types that are shared or accessed globally.

---

# 2. Notice

- In this codebase, the **gluestack** UI library is used for seamless development of UI components. Although creating custom components is fine, _I highly advise to use gluestack components inside the codebase as much as possible_. Only opt to create custom components if there is any UI component you wish to implement but is not yet supported or provided by gluestack.

- For variable naming conventions, refer to the following:
  - `camelCase` for variables that are not rendered.
  - `PascalCase` for variables that are treated as React UI components

---

# 3. Code Management

## ESLint

Run `npx eslint . --ext .js,.jsx,.ts,.tsx` to identify inconsistencies and potential bugs in the app.
