import { Image, ImageSourcePropType } from "react-native";

interface ImageViewProps {
  placeholderImageSource: ImageSourcePropType;
}
export const ImageViewer = ({ placeholderImageSource }: ImageViewProps) => (
  <Image
    source={placeholderImageSource}
    className="rounded-2xl"
    width={320}
    height={440}
  />
);
