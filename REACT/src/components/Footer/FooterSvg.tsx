// import {americanExpress} from "../../assets/img/svg/americanExpress.svg"
import Visa  from "../../assets/img/svg/visa.svg?react";
import AmericanExpress  from "../../assets/img/svg/americanExpress.svg?react";
import DinersClub  from "../../assets/img/svg/dinersClub.svg?react";
import Master  from "../../assets/img/svg/master.svg?react";
import Paypal  from "../../assets/img/svg/paypal.svg?react";

const FooterSvg = () => {
	return (
		<ul className="flex">
        <li>
          <Visa />
        </li>
				<li>
          <AmericanExpress />
        </li>
				<li>
          <DinersClub />
        </li>
				<li>
          <Master />
        </li>
				<li>
          <Paypal />
        </li>
    </ul>
	)
}

export default FooterSvg;
