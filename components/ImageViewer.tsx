import { Image, ImageSourcePropType } from "react-native";

interface ImageViewProps {
  placeholderImageSource: ImageSourcePropType;
  selectedImage?: string;
}
export const ImageViewer = ({
  placeholderImageSource,
  selectedImage,
}: ImageViewProps) => (
  <Image
    source={selectedImage ? { uri: selectedImage } : placeholderImageSource}
    className="rounded-2xl"
    width={320}
    height={440}
  />
);
