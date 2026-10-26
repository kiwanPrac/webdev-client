export default function Dimensions() {
    return (
      <div id="wd-css-dimensions">
        <h2>Dimension</h2>
        <div>
          <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
          <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
            Landscape
          </div>
          <div className="wd-dimension-square wd-bg-color-red">Square</div>
          <div id="wd-ai-dimension" className="wd-ai-dimension">
            With AI 2.1.12 - This is a long sentence to demonstrate how text wraps inside a box with a fixed width and height.
          </div>
        </div>
        <div className="wd-dimension-custom wd-bg-color-yellow wd-border-thin wd-border-solid wd-border-blue">
          On your own 2.1.12 - Styling an HTML Tag's Dimensions and Display with CSS
        </div>
      </div>
    );
  }