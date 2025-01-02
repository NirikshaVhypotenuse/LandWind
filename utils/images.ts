import GithubIcon from "~/assets/icons/github-icon.svg";
import GoogleIcon from "~/assets/icons/google-icon.svg";
import MicrosoftIcon from "~/assets/icons/microsoft-icon.svg";
import SpotifyIcon from "~/assets/icons/spotify-icon.svg";
import MailchimpIcon from "~/assets/icons/mailchimp-icon.svg";
import MashAbleIcon from "~/assets/icons/mashable-icon.svg";
import TickIcon from "~/assets/icons/tick-icon.svg"

export enum IconKeys {
    Github = "github",
    Google = "google",
    Microsoft = "microsoft",
    Spotify = "spotify",
    Mailchimp = "mailchimp",
    Mashable = "mashable",
    Tick = "tick"
}

export const icons: Record<IconKeys, string> = {
    github: GithubIcon,
    google: GoogleIcon,
    microsoft: MicrosoftIcon,
    spotify: SpotifyIcon,
    mailchimp: MailchimpIcon,
    mashable: MashAbleIcon,
    tick: TickIcon
};