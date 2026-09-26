export default function AnchorTag() {
  return (
    <>
      <h4>Anchor tag</h4>
      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy text
      <br />
      <a href="https://github.com/jannunzi" id="wd-github">
        GitHub
      </a>
      <br />

      <a
        href="https://www.pgatoursuperstore.com/"
        id="wd-your-link"
      >
        golf gear store
      </a>

      <br />

      <a
        href="https://github.com/kiwanPrac"
        id="wd-your-github"
        target="_blank"
        rel="noreferrer"
      >
        My GitHub
      </a>
    </>
  );
}