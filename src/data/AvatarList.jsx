import luna_reading from "./assets/luna/luna-reading.svg";
import luna_blinking from "./assets/luna/luna-blinking.svg";
import luna_coffee from "./assets/luna/luna-coffee.svg";
import luna_sleeping from "./assets/luna/luna-sleeping.svg";
import luna_page_flipping from "./assets/luna/luna-page-flipping.svg";
import leo_singing from "./assets/leo/leo-singing.svg";
import leo_sitting from "./assets/leo/leo-sitting.svg";
import leo_playing_sad from "./assets/leo/leo-playing-sad.svg";
import leo_playing_happy from "./assets/leo/leo-playing-happy.svg";
import leo_sleeping from "./assets/leo/leo-sleeping.svg";

export const AvatarList = [
  {
    avatarKey: "luna",
    defaultActions: [luna_reading, luna_blinking],
    animations: [
      {
        property: "luna_morning",
        description: "animated actions of the avatar in morning",
        startHour: 7,
        endHour: 9,
        actions: [luna_coffee],
        subActions: [],
      },
      {
        property: "luna_midday",
        description: "animated actions of the avatar in morning",
        startHour: 9,
        endHour: 18,
        actions: [luna_reading, luna_blinking, luna_page_flipping],
        subActions: [],
      },
      {
        property: "luna_evening",
        description: "animated actions of the avatar in morning",
        startHour: 18,
        endHour: 20,
        actions: [luna_coffee],
        subActions: [],
      },
      {
        property: "luna_evening",
        description: "animated actions of the avatar in morning",
        startHour: 20,
        endHour: 8,
        actions: [luna_sleeping],
        subActions: [],
      },
    ],
  },
  {
    avatarKey: "leo",
    defaultActions: [leo_singing, leo_sitting],
    animations: [
      {
        property: "leo_morning",
        description: "animated actions of the avatar in morning",
        startHour: 7,
        endHour: 9,
        actions: [leo_sleeping],
        subActions: ["snores"],
      },
      {
        property: "leo_midday",
        description: "animated actions of the avatar in morning",
        startHour: 9,
        endHour: 17,
        actions: [leo_singing, leo_sitting],
        subActions: ["music_symbols"],
      },
      {
        property: "leo_evening",
        description: "animated actions of the avatar in morning",
        startHour: 17,
        endHour: 22,
        actions: [leo_playing_happy, leo_playing_sad],
        subActions: [],
      },
      {
        property: "leo_night",
        description: "animated actions of the avatar in morning",
        startHour: 22,
        endHour: 8,
        actions: [leo_sleeping],
        subActions: ["snores"],
      },
    ],
  },
];
