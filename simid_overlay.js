class SimidOverlay extends BaseSimidCreative {
  constructor() {
    super();
    this.adContainer = document.getElementById('ad_container');
    this.showPlayableAd(); // Automatically launch playable
  }

  showPlayableAd() {
  const iframe = document.createElement('iframe');
  iframe.src = 'https://tech-iion.github.io/advertiser-creatives/allKinds/';
  iframe.style.border = 'none';
  iframe.style.display = 'block';
  iframe.style.margin = '0 auto';

  // Dynamically size to fit the player's creative dimensions
  const width = this.environmentData?.creativeDimensions?.width || '100%';
  const height = this.environmentData?.creativeDimensions?.height || '100%';
  iframe.style.width = typeof width === 'number' ? width + 'px' : width;
  iframe.style.height = typeof height === 'number' ? height + 'px' : height;

  this.adContainer.appendChild(iframe);
  }
}
