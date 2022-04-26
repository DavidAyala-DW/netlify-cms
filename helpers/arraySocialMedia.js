import Twitter from "../public/twitter.svg";
import Instagram from "../public/instagram.svg";
import Discord from "../public/discord.svg";
import Tiktok from "../public/tiktok.svg";
import Telegram from "../public/telegram.svg";
import Reddit from "../public/reddit.svg";

export function arraySocialMedia(obj) {
  return [
    {
      Icon: Twitter,
      URL: obj.contact_twitter
    },
  
    {
      Icon: Instagram,
      URL: obj.contact_instagram
    },
  
    {
      Icon: Discord,
      URL: obj.contact_discord
    },
    {
      Icon: Tiktok,
      URL: obj.contact_tiktok
    },
    {
      Icon: Telegram,
      URL: obj.contact_telegram
    },
  
    {
      Icon: Reddit,
      URL: obj.contact_reddit
    }

  ]
}

