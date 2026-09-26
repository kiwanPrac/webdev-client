export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />

      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />

      <br />
      Loading my favorite car image:
      <br />
      <img
        id="wd-your-image"
        src="https://hips.hearstapps.com/hmg-prod/images/2025-porsche-taycan-cross-turismo-105-6887a5436cde1.jpg?crop=0.545xw:0.459xh;0.221xw,0.385xh&resize=1200:*"
        height="200px"
        alt="Porsche Taycan Cross Turismo"
      />

      <br />
      Loading an AI sample image:
      <br />
      <img
        id="wd-ai-image"
        src="https://www.nasa.gov/wp-content/uploads/2023/03/iss066e081311.jpg"
        width="200px"
        alt="Earth from space"
      />
    </div>
  );
}