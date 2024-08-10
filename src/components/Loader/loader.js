import React from 'react';
import './loader.css';

function Loader({ show }) {
  if (show) {
    return (
      <div className="loader">
        <svg className="circular" viewbox="25 25 50 50">
          <circle
            className="path"
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke-width="2"
            stroke-miterlimit="10"
          ></circle>
        </svg>
      </div>
    );
  } else {
    <div></div>;
  }
}

<script
  data-name="BMC-Widget"
  data-cfasync="false"
  src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
  data-id="programmingfans"
  data-description="Support me on Buy me a coffee!"
  data-message=""
  data-color="#FF813F"
  data-position="Right"
  data-x_margin="18"
  data-y_margin="18"
></script>;

export default Loader;
