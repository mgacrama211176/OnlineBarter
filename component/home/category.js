import { Box, Typography } from "@mui/material";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import TabletMacIcon from "@mui/icons-material/TabletMac";
import ComputerIcon from "@mui/icons-material/Computer";
import EarbudsIcon from "@mui/icons-material/Earbuds";
import WatchIcon from "@mui/icons-material/Watch";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import ConstructionIcon from "@mui/icons-material/Construction";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import HeadsetIcon from "@mui/icons-material/Headset";
import AppleIcon from "@mui/icons-material/Apple";

const CategoryFilters = () => {
  const category = [
    {
      title: "Console",
      icon: VideogameAssetIcon,
    },
    {
      title: "Phone",
      icon: PhoneAndroidIcon,
    },
    {
      title: "Tablet",
      icon: TabletMacIcon,
    },
    {
      title: "Computer",
      icon: ComputerIcon,
    },
    {
      title: "EarBuds",
      icon: EarbudsIcon,
    },
    {
      title: "Watch",
      icon: WatchIcon,
    },
    {
      title: "Car",
      icon: DirectionsCarFilledIcon,
    },
    {
      title: "Motor",
      icon: TwoWheelerIcon,
    },
    {
      title: "Tools",
      icon: ConstructionIcon,
    },
    {
      title: "Bags",
      icon: LocalMallIcon,
    },
    {
      title: "Bike",
      icon: PedalBikeIcon,
    },
    {
      title: "Headset",
      icon: HeadsetIcon,
    },
    {
      title: "Apple",
      icon: AppleIcon,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      {category.map((category, index) => (
        <Box
          sx={{
            display: "flex",
            flexFlow: "column nowrap",
            alignItems: "center",
            paddingInline: "8px",
            paddingTop: "20px",
            cursor: "pointer",
          }}
          key={index}
        >
          <category.icon
            sx={{
              fontSize: {
                xs: "20px",
                md: "25px",
              },
              color: "gray",
            }}
          />
          <Typography
            variant="p"
            sx={{
              fontSize: "10px",
              fontWeight: "bold",
              color: "gray",
              paddingTop: "5px",
            }}
          >
            {category.title}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default CategoryFilters;
