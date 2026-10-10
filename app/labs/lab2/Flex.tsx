export default function Flex() {
    return (
      <div id="wd-css-flex">
        <h2>Flex</h2>
        <div className="wd-flex-row-container">
          <div className="wd-bg-color-yellow wd-width-110px">Column 1</div>
          <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
          <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
            Column 3
          </div>
        </div>
        <h3>On your own - Laying Out Content with CSS Flex</h3>
        <div className="wd-flex-row-container">
          <div className="wd-bg-color-green wd-fg-color-white wd-width-110px">
            Fixed width
          </div>
          <div className="wd-bg-color-blue wd-fg-color-white wd-flex-grow-1">
            Flexible width
          </div>
        </div>
        <div id="wd-ai-flex" className="wd-flex-row-container">
            <div className="wd-bg-color-yellow wd-width-110px">
                AI Column 1 - Fixed
            </div>
            <div className="wd-bg-color-blue wd-fg-color-white">
                AI Column 2
            </div>
            <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
                AI Column 3 - Grow
            </div>
        </div>
      </div>
    );
  }