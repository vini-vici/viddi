# Vidi UI

The Vidi UI is the playful name given to the UI for the Vicci project.

This UI was built to be an example UI for others, and was originally part of the front-end for the Vicci project. It was been split out in order to have the front-end focus on the actual parts of the application. It should be considered like any other third-party UI library, such as Material UI.

## Local Work

To create a new component simply add in a new folder, complete with files. The going standard is

```
- componentName
-- componentName.component.tsx
-- componentName.spec.tsx
-- componentName.story.tsx
-- componentName.module.css
```

`componentName.component.tsx` houses the actual React component. A going process is any internal state that a component may use should have an event that notifies when that state is updated, e.g. a checkbox should have at the very least an `onChange`. This is not a hard requirement, but more a consideration. Likewise, any internal state should be considered for having a prop that set an initial value.

`componentName.spec.tsx` houses the Jest test. While using the coverage, make sure as much of your component is unit tested as possible.

`componentName.story.tsx` is the Storybook story that people can use to view each component on its own.

`componentName.module.css`(optional) is any specific CSS classes that your component may need. An example can be seen in the `Modal` or `Checkbox` components. Please note that since we are using Tailwind CSS you may use `@apply` statements to get the values from the story.

To view the storybook simply run `pnpm start`. This should start the Storybook build process, which will open up a browser whenever it is finished.

## Contributing

Push your change up to a fork and add in a PR. The linter and tests must pass in your branch before being merged in.

## License

This is an MIT style license. You can use this wherever you want, I do not care. However, this UI library is likely not supported outside of the usecase of the Viddi example application.