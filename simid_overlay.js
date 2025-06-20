class SimidOverlay extends BaseSimidCreative {
  constructor() {
    super();
    this.adContainer = document.getElementById('ad_container');
  }

  /**
   * Called when the player sends the resize message.
   * This ensures the iframe gets inserted only when we have correct dimensions.
   */
  onReceiveResize(eventData) {
    super.onReceiveResize(eventData);
    this.showPlayableAd();
  }

  showPlayableAd() {
    const iframe = document.createElement('iframe');
    iframe.src = 'https://tech-iion.github.io/advertiser-creatives/allKinds/';
    iframe.style.border = 'none';
    iframe.style.display = 'block';
    iframe.style.margin = '0 auto';

    // Use creative dimensions from SIMID player if available
    const width = this.environmentData?.creativeDimensions?.width || '100%';
    const height = this.environmentData?.creativeDimensions?.height || '100%';
    iframe.style.width = typeof width === 'number' ? width + 'px' : width;
    iframe.style.height = typeof height === 'number' ? height + 'px' : height;

    this.adContainer.innerHTML = ''; // Clear any previous content
    this.adContainer.appendChild(iframe);
  }
}
