import React from "react";
import Image from "./Image";

export default class ImageList extends React.Component {
  // Create Lifecycle method to prevent re render of the list if some spaces are present. 
  // Use the shouldComponentUpdate lifecycle method here
  shouldComponentUpdate(nextProps) {
    // Compare current images array with next images array
    // Check if both arrays have the same length
    if (this.props.images.length !== nextProps.images.length) {
      return true; // Re-render if lengths differ
    }

    // Check if every element in the current images array
    // is strictly equal to the corresponding element in the next images array
    const currentImages = this.props.images;
    const nextImages = nextProps.images;

    for (let i = 0; i < currentImages.length; i++) {
      if (currentImages[i] !== nextImages[i]) {
        return true; // Re-render if any image URL differs
      }
    }

    return false; // No need to re-render if images array is identical
  }


  render() {
    return (
      <div className="image-list">
        {this.props.images.map((image, index) => {
          return <Image key={index} image={image} />;
        })}
      </div>
    );
  }
}
