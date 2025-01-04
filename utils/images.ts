import GithubIcon from "~/assets/icons/github-icon.svg";
import GoogleIcon from "~/assets/icons/google-icon.svg";
import MicrosoftIcon from "~/assets/icons/microsoft-icon.svg";
import SpotifyIcon from "~/assets/icons/spotify-icon.svg";
import MailchimpIcon from "~/assets/icons/mailchimp-icon.svg";
import MashAbleIcon from "~/assets/icons/mashable-icon.svg";
import TickIcon from "~/assets/icons/tick-icon.svg";
import FacebookIcon from "~/assets/icons/facebook-icon.svg";
import InstagramIcon from "~/assets/icons/instagram-icon.svg";
import TwitterIcon from "~/assets/icons/twitter-icon.svg";
import GitIcon from "~/assets/icons/git-icon.svg";
import BallIcon from "~/assets/icons/ball-icon.svg";
import ArrowIcon from "~/assets/icons/arrow-icon.svg";
import DoubleCoatsIcon from "~/assets/icons/doublecoats-icon.svg";
import TickMarkIcon from "~/assets/icons/tickmark-icon.svg";
import StarIcon from "~/assets/icons/star-icon.svg";
import FigmaIcon from "~/assets/icons/figma-icon.svg";
import ToggleIcon from "~/assets/icons/toggle-icon.svg";
import ProfileIcon from "~/assets/icons/profile-icon.svg";
import GlobeIcon from "~/assets/icons/google-icon.svg";
import BasketIcon from "~/assets/icons/basket-icon.svg";
import DropdownIcon from "~/assets/icons/dropdown-icon.svg";

export enum IconKeys {
    Github = "github",
    Google = "google",
    Microsoft = "microsoft",
    Spotify = "spotify",
    Mailchimp = "mailchimp",
    Mashable = "mashable",
    Tick = "tick",
    Facebook = "facebook",
    Instagram = "instagram",
    Twitter = "twitter",
    Git = "git",
    Ball = "ball",
    Arrow = "arrow",
    DoubleCoats = "doublecoats",
    TickMark = "tickmark",
    Star = "star",
    Figma = "figma",
    Toggle = "toggle",
    Profile = "profile",
    Globe = "globe",
    Basket = "basket",
    Dropdown = "dropdown"
}

export const icons: Record<IconKeys, string> = {
    github: GithubIcon,
    google: GoogleIcon,
    microsoft: MicrosoftIcon,
    spotify: SpotifyIcon,
    mailchimp: MailchimpIcon,
    mashable: MashAbleIcon,
    tick: TickIcon,
    facebook: FacebookIcon,
    instagram: InstagramIcon,
    twitter: TwitterIcon,
    git: GitIcon,
    ball: BallIcon,
    arrow: ArrowIcon,
    doublecoats: DoubleCoatsIcon,
    tickmark: TickMarkIcon,
    star: StarIcon,
    figma: FigmaIcon,
    toggle: ToggleIcon,
    profile: ProfileIcon,
    globe: GlobeIcon,
    basket: BasketIcon,
    dropdown: DropdownIcon
};