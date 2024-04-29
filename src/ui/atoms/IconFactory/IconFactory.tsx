import * as proptypes from "./IconFactory.proptypes";
import * as Icon  from "@icons/SvgIcons";

export default function IconFactory({ iconType, fill="#353535" } : proptypes.IconFactoryProps) {

    switch (iconType) {
      case "shoping_car": return <Icon.ShopingCar fill={fill} />
      case "user": return <Icon.User fill={fill} />
      case "close": return <Icon.Close fill={fill} />
      default: return null;
    }
}