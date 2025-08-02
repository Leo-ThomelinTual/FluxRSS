export default defineComponent({
  props: {
    message: String,
  },
  // @ts-expect-error investigate why `props` is not typed
  render(props) {
    return <button>{props.message}</button>;
  },
});
