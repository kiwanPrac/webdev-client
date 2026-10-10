export default function TailwindFilters() {
    // reactjs.jpg is used here so the lab runs out of the box.
    const src = "/images/reactjs.jpg";
    return (
      <div>
        <h2 className="text-2xl font-bold">Blurs</h2>
        <div className="flex">
          <img className="blur-none w-1/4" src={src} alt="blur none" />
          <img className="blur-sm w-1/4" src={src} alt="blur sm" />
          <img className="blur-lg w-1/4" src={src} alt="blur lg" />
          <img className="blur-2xl w-1/4" src={src} alt="blur 2xl" />
        </div>
  
        <h2 className="text-2xl font-bold mt-8">On your own - Filters</h2>
        <div className="flex gap-4">
          <img className="grayscale w-1/4" src={src} alt="grayscale" />
          <img className="brightness-150 w-1/4" src={src} alt="brightness 150" />
          <img className="contrast-150 w-1/4" src={src} alt="contrast 150" />
        </div>
  
        <h3 className="text-lg font-bold">Grayscale and brightness</h3>
        <div id="wd-ai-filters" className="flex">
          <img className="grayscale w-1/4" src={src} alt="grayscale" />
          <img className="grayscale-0 w-1/4" src={src} alt="grayscale 0" />
          <img className="brightness-50 w-1/4" src={src} alt="brightness 50" />
          <img className="brightness-150 w-1/4" src={src} alt="brightness 150" />
        </div>
      </div>
    );
  }