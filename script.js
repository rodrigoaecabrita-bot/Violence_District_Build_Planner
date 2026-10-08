// Default icon for shop items
const EMBLEM_ICON = "https://static.wikia.nocookie.net/violencedistrict/images/d/d3/Emblems.png/revision/latest?cb=20250820221700oh";

// --- FULL KILLERS LIST ---
const killersData = [
  { 
    id: "slasher", 
    name: "The Slasher", 
    ref: "Jason Voorhees",
    image: "https://static.wikia.nocookie.net/violencedistrict/images/5/5e/TheSlasher.png/revision/latest/scale-to-width-down/130?cb=20251231113735",
    description: "A relentless force, The Slasher moves undetected and with overwhelming strength, leaving no escape for those who stand in his way.",
    stats: {
      moveSpeedBase: "110% (18.7 studs/s)",
      moveSpeedPursuit: "125% (21.25 studs/s)",
      intentRadius: "90 Studs"
    },
    skills: [
      {
        name: "Lake of Mist",
        icon: "https://static.wikia.nocookie.net/violencedistrict/images/4/4b/TheSlasherSkill01.png", 
        description: "Embracing the power of the lake, The Slasher fades into the mist, granting him immense speed and near complete transparency as long as a survivor doesn't catch him in the act.",
        effects: [
          "80% translucence",
          "Large Haste for the duration",
          "Complete Stealth, lingering for 4 seconds even after decloaking",
          "Global audio cue on activation",
          "60s cooldown",
          "Major Hindrance upon decloaking",
          "Disables vaulting, destruction, and attacking when active"
        ]
      },
      {
        name: "Pursuit",
        icon: "https://static.wikia.nocookie.net/violencedistrict/images/9/93/TheSlasherSkill02.png", 
        description: "The Slasher unleashes his fury, giving him enhanced destruction capabilities and speed buffs.",
        effects: [
          "Haste buff",
          "Touching dropped pallets instantly destroys them",
          "Destroying a pallet in your Pursuit applies a major Hindrance for a short duration",
          "Slasher's screen gains a red tint"
        ]
      }
    ]
  },
  { 
    id: "stalker", 
    name: "The Stalker", 
    ref: "Michael Myers",
    image: "https://static.wikia.nocookie.net/violencedistrict/images/4/47/The_Stalker.png/revision/latest/scale-to-width-down/1000?cb=20260103093757",
    description: "A Masked sadistic individual obsessed with survivors. Plays around survivors like food, often saving the obsession for the last, as for the other survivors, last thing they hear is his heavy breath under his mask.",
    stats: {
      moveSpeedBase: "Stalker: 110% (18.7 studs/s) | Hunt: 120% (20.4 studs/s)",
      moveSpeedPursuit: "20.4 studs/s (Hunt Mode)",
      intentRadius: "Stalker Mode: 0 Studs | Hunt Mode: 90 Studs"
    },
    skills: [
      {
        name: "Stalk",
        icon: "https://static.wikia.nocookie.net/violencedistrict/images/8/80/TheStalkerSkill01.png",
        description: "Press and hold the Power button to stalk all visible Survivors, Stalked Survivors are highlighted.",
        effects: [
          "Permanent Undetectable while in Stalker Mode",
          "Stalking Survivors fills the Evil's Grasp Gauge",
          "The closer to a Survivor, the quicker it fills",
          "After filling the gauge, Evil's Grasp becomes available (one use per power)"
        ]
      },
      {
        name: "Evil's Grasp",
        icon: "https://static.wikia.nocookie.net/violencedistrict/images/2/26/TheStalkerSkill02.png",
        description: "The stalker raises his arm, lunging forward to grab a survivor. On contact, he slams them into the ground, applying Anti-Heal for 40 seconds. Changes mode to Hunt Mode for 70 seconds.",
        effects: [
          "Loses Undetectable status during Hunt Mode",
          "Movement speed boost to 20.4 studs/sec",
          "Speed boost to vaulting and destroying obstacles",
          "Increases Hunt Mode duration by 10 seconds if a survivor is spiked during Hunt Mode",
          "Returns to Stalker Mode after 70 seconds"
        ]
      }
    ]
  },
  { 
    id: "killer", 
    name: "The Killer", 
    ref: "Jeff the Killer",
    image: "https://static.wikia.nocookie.net/violencedistrict/images/0/0c/The_Killer.png/revision/latest?cb=20260103093127",
    description: "An amateur killer inspired by the urban legend. The Killer's clumsiness and sloppy methods betray his inexperience, leaving behind messy, chaotic scenes. Paired with his agility and erratic unpredictable behavior makes him a threat to big groups.",
    stats: {
      moveSpeedBase: "115% (19.6 studs/s)",
      moveSpeedPursuit: "Frenzy: 150% / 160% / 170%",
      intentRadius: "Base: 90 Studs | Frenzy: 120 Studs"
    },
    skills: [
      {
        name: "Frenzy",
        icon: "https://static.wikia.nocookie.net/violencedistrict/images/6/62/TheKillerSkill01.png",
        description: "Upon activation, it grants The Killer the Frenzy Buff for 13 seconds, boosting speed and tracking capabilities.",
        effects: [
          "Grants the ability to vault pallets and vaults",
          "Increases movement speed to 150% and terror radius to 120 studs",
          "Grants the ability to track Survivors in terror radius with Killer Instinct",
          "Chaining hits refills power gauge and increases speed to 160%/170%",
          "Chaining the 4th hit downs the Survivor regardless of health state",
          "Special State Fatigue: 2.5s duration (6.85 studs/s speed) upon whiffing, getting stunned, or ending Frenzy"
        ]
      }
    ]
  },
  { 
    id: "hidden", 
    name: "The Hidden", 
    ref: "Subject 617",
    image: "https://static.wikia.nocookie.net/violencedistrict/images/2/2e/The_Hidden.png/revision/latest?cb=20260103100101",
    description: "A team of scientists went through years and years of experiments to modify and enhance the human DNA strain. Many test subjects were rendered either insane or dead from the experiments, and one of these poor individuals was The Hidden.",
    stats: {
      moveSpeedBase: "110% (18.7 studs/s)",
      moveSpeedPursuit: "N/A",
      intentRadius: "Base: 45 Studs"
    },
    skills: [
      {
        name: "Passive: Invisibility",
        icon: "https://i.pinimg.com/736x/1c/00/e4/1c00e4602b5b8d194f4767aa151224bf.jpg",
        description: "If The Hidden remains standing still, he becomes completely invisible.",
        effects: [
          "Complete invisibility while stationary"
        ]
      },
      {
        name: "Mark",
        icon: "https://static.wikia.nocookie.net/violencedistrict/images/c/ca/TheHiddenSkill01.png",
        description: "The Hidden does a windup which changes his knife stance and lunges forward, marking any survivor hit for 10 seconds to initiate the hunt.",
        effects: [
          "Very small hitbox but travels very far",
          "Marks hit survivors for 10 seconds to start the hunt"
        ]
      },
      {
        name: "Leap",
        icon: "https://static.wikia.nocookie.net/violencedistrict/images/3/38/TheHiddenSkill02.png",
        description: "Allows The Hidden to launch themselves in the direction they are looking, jumping over obstacles and everything in their way.",
        effects: [
          "Can jump over pallets and vaults",
          "Has low-end lag on landing"
        ]
      }
    ]
  },
  { 
    id: "masked", 
    name: "The Masked", 
    ref: "Jacket",
    image: "https://static.wikia.nocookie.net/violencedistrict/images/b/b2/The_Masked.png/revision/latest?cb=20260103100953",
    description: "After receiving cryptic messages left on his answering machine, The Masked attempts to gain the attention of 50 Blessings by recreating the numerous slaughters that occurred in Miami from 1989 to 1991.",
    stats: {
      moveSpeedBase: "115% (19.6 studs/s)",
      moveSpeedPursuit: "Brandon Mask: Walk Faster Boost",
      intentRadius: "Base: 90 Studs | Richter Mask: 0 Studs"
    },
    skills: [
      {
        name: "Mask Up",
        icon: "https://static.wikia.nocookie.net/violencedistrict/images/8/80/TheMaskedSkill01.png",
        description: "Grants The Masked the ability to swap to a random mask every 30 seconds for a full minute upon activation.",
        effects: [
          "The Masked suffers a Hindered effect when swapping masks, unable to interact with survivors or props during the swap."
        ]
      }
    ],
    masks: [
      {
        name: "Richard (Rooster)",
        icon: "https://static.wikia.nocookie.net/violencedistrict/images/2/28/TheMaskedChicken.png/revision/latest?cb=20250825072858",
        effect: "Default mask. Grants no abilities."
      },
      {
        name: "Tony (Tiger)",
        icon: "https://static.wikia.nocookie.net/violencedistrict/images/2/2a/TheMaskedTiger.png/revision/latest?cb=20250825072929",
        effect: "Lethal Punches: Drop the bat for your bare fists, disabling lunge in return for a punch attack that instantly puts survivors into the downed state."
      },
      {
        name: "Brandon (Panther)",
        icon: "https://static.wikia.nocookie.net/violencedistrict/images/c/c5/TheMaskedPanther.png/revision/latest?cb=20250825072939",
        effect: "Walk Faster: Grants you a speed boost."
      },
      {
        name: "Jake (Cobra)",
        icon: "https://static.wikia.nocookie.net/violencedistrict/images/0/0d/TheMaskedSnake.png/revision/latest?cb=20250825072950",
        effect: "Increased Lunge extension: Switch the bat with a knife, which grants you an increased lunge range."
      },
      {
        name: "Richter (Rat)",
        icon: "https://static.wikia.nocookie.net/violencedistrict/images/1/1b/TheMaskedRat.png/revision/latest?cb=20250825073003",
        effect: "Complete Stealth: Removes red lights and terror radius. Chase theme still plays, however."
      },
      {
        name: "Graham (Rabbit)",
        icon: "https://static.wikia.nocookie.net/violencedistrict/images/3/39/TheMaskedRabbit.png/revision/latest?cb=20250825073012",
        effect: "Faster Vaults: Faster vault animation, comparable to The Killer during frenzy."
      },
      {
        name: "Alex (Swan)",
        icon: "https://static.wikia.nocookie.net/violencedistrict/images/0/0c/TheMaskedSwan.png/revision/latest?cb=20250825073021",
        effect: "Chainsaw Time: Drop your bat for a chainsaw, which requires a small windup. Charge forward, instantly downing anyone hit."
      }
    ]
  },
  { 
    id: "abysswalker", 
    name: "The Abysswalker", 
    ref: "Artorias",
    image: "https://static.wikia.nocookie.net/violencedistrict/images/2/22/The_Abysswalker.png/revision/latest?cb=20260103100505",
    description: "Once a great knight to a king, on an expedition to battle creatures of the abyss. He was unmatched with his sword and indomitable will, but the battle against the abyss grew stronger, and he was left fighting until his soul was no longer. For the jester was victorious and he became The Abysswalker.",
    stats: {
      moveSpeedBase: "115% (19.6 studs/s)",
      moveSpeedPursuit: "N/A",
      intentRadius: "Base: 90 Studs"
    },
    skills: [
      {
        name: "Dark Severance",
        icon: "https://static.wikia.nocookie.net/violencedistrict/images/3/36/TheAbysswalkerSkill01.png",
        description: "The Abysswalker charges up a horizontal slash THAT CAN BE DODGED BY CROUCHING and gains movement speed during build up to unleash an attack that deals damage to more than one survivor.",
        effects: [
          "Can be dodged by crouching",
          "Gains movement speed during build-up",
          "Deals damage to multiple survivors in area"
        ]
      },
      {
        name: "Abyssal Burst",
        icon: "https://static.wikia.nocookie.net/violencedistrict/images/b/b3/TheAbysswalkerSkill02.png",
        description: "The Abysswalker swings his hand for a long windup and sends out a burst of corruption that travels the whole map.",
        effects: [
          "Travels across the entire map",
          "Survivors hit are highlighted for the killer",
          "Slows hit survivors by 50% for 4 seconds"
        ]
      }
    ]
  },
  { 
    id: "veil", 
    name: "The Veil", 
    ref: "Original",
    image: "https://i.namu.wiki/i/b58G3Z-u16eSPpUCF9hXQCqxEOXTuxjWTltNfqazah5sppGZyCJvmyC186zk41p5wMbpj_2MLubxjstbyXd06g.webp",
    description: "Running away from her wedding day after getting the worst news of her life, an accident claimed her life falling on the cold iron below. Now her spirit lingers, pierced by the spears that ended her life, promising to deliver to others the same cruel fate she endured.",
    stats: {
      moveSpeedBase: "110% (18.7 studs/s)",
      moveSpeedPursuit: "N/A",
      intentRadius: "Base: 90 Studs"
    },
    skills: [
      {
        name: "Pierced Vow",
        icon: "https://static.wikia.nocookie.net/violencedistrict/images/4/40/TheVeilSkill01.png",
        description: "The Veil switches from her dagger to the spears lodged in her body. Press and hold the attack button to wind up and charge a spear that slows survivors on headshots by 30% for 1 second, reaching maximum power after 1 second.",
        effects: [
          "Spears recharge every 15 seconds, up to 2 spears max",
          "Unable to interact with props such as pallets, vaults, or generators in this mode",
          "Cannot carry survivors without switching back to her dagger"
        ]
      },
      {
        name: "Through the Veil",
        icon: "https://static.wikia.nocookie.net/violencedistrict/images/d/d6/TheVeilSkill02.png",
        description: "After charging a spear for up to two seconds, The Veil transfers it to the other world, allowing it to ignore collisions and pass through walls. This also makes the spear lighter, increasing its power and throwing distance.",
        effects: [
          "Ignores collisions and passes through walls",
          "Increased power and throwing distance",
          "30 seconds cooldown after throwing a veiled spear"
        ]
      }
    ]
  },
  { 
    id: "cure", 
    name: "The Cure", 
    ref: "Plague Doctor",
    image: "https://static.wikia.nocookie.net/violencedistrict/images/a/ae/The_Cure_New_picture_as_old_was_ugly.png/revision/latest?cb=20260523161246",
    description: "The Cure believes the world is infected by a disease only he can see, experimenting on anyone he thinks is such and bringing his \"cured\" patients back as quiet, empty servants.",
    stats: {
      moveSpeedBase: "110% (18.7 studs/s)",
      moveSpeedPursuit: "Lunge: 27 studs/s (0.6s)",
      intentRadius: "Base: 72 Studs"
    },
    skills: [
      {
        name: "Elucidation",
        icon: "https://static.wikia.nocookie.net/violencedistrict/images/2/28/TempElucIcon.png",
        description: "The Cure equips a bottle. Press and hold the ability button to charge and throw a flask that flies through the air to create a cloud of Pestilence.",
        effects: [
          "Creates a cloud slowing survivors up to 30% and applying Pestilence",
          "15s cooldown",
          "Each infected survivor grants The Cure a 5% break and vault speed boost",
          "Pestilence is automatically removed after 90 seconds"
        ]
      },
      {
        name: "I Am The Cure",
        icon: "https://static.wikia.nocookie.net/violencedistrict/images/4/44/TempIATCIconFix.png",
        description: "Gain access to your syringe, allowing you to inject downed survivors or corpses to convert them into SCP-049-2 instances.",
        effects: [
          "Living survivors can only be injected once per spike stage",
          "Injecting before first spike applies 4% movement speed slowdown",
          "Injecting after one spike applies 6% repair speed slowdown",
          "SCP-049-2 instances move at 9-13 studs/s, target survivors, and apply Pestilence",
          "Special Effect Mini Mori: After two injection charges, grants ability to transform downed survivors into SCP-049-2, killing them instantly"
        ]
      }
    ]
  }
];

// --- FULL KILLER PERKS LIST ---
const perksData = [
  {
    id: "excitement",
    name: "Excitement",
    type: "The Slasher (Level 15)",
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/7/73/TheSlasherPerk01.png", 
    quote: '"It\'s about the destination not the journey."',
    description: "The thought of satisfying Mother's will excites you. When picking up a knocked Survivor, gain a 10/15/20% Haste buff while carrying them at the cost of a 36 stud increase in killer aura."
  },
  {
    id: "brutal_strength",
    name: "Brutal Strength",
    type: "The Slasher (Level 30)",
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/1/1a/TheSlasherPerk02.png", 
    quote: '"100 gorillas vs 1 Slasher"',
    description: "Your raw strength obliterates anything in your way. Kicking pallets and generators is 20/30/40% faster."
  },
  {
    id: "offscreen_scare",
    name: "Offscreen Scare",
    type: "The Slasher (Level 45)",
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/0/0e/TheSlasherPerk03.png", 
    quote: '"Absolute cinema."',
    description: "Not just a horror movie trope. When out of chase gain a 6/8/10% speed boost. This perk deactivates if there is a survivor within 50 studs."
  },
  {
    id: "predator",
    name: "Predator",
    type: "The Stalker (Level 15)",
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/9/9a/TheStalkerPerk01.png", 
    quote: '"intense breathing."',
    description: "Stalking and hunting is familiar enough to know everything from your victims. When a survivor escapes a chase, see their aura for 4 seconds. This perk only works while in chase and has a cooldown of 40/35/30 seconds."
  },
  {
    id: "eternal_torment",
    name: "Eternal Torment",
    type: "The Stalker (Level 30)",
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/c/ca/TheStalkerPerk02.png", 
    quote: '"it\'s like adding fuel to flame"',
    description: "Your presence alone makes survivors doubt themselves even after stunning you. When a survivor stuns you by any means, they become vulnerable for 20/25/30 seconds. The perk then goes on cooldown for 40 seconds."
  },
  {
    id: "play_with_your_food",
    name: "Play with your food",
    type: "The Stalker (Level 45)",
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/0/02/TheStalkerPerk03.png", 
    quote: '"For the love of the game."',
    description: "Each time you chase a survivor and let them escape. Play with Your Food gains +1 Token, up to a maximum of 3 Tokens. Grants a stack-able speed boost per Token, up to a maximum of 12%. Performing Basic Attacks, or Special Attacks that can damage Survivors, consumes 1 Token."
  },
  {
    id: "terror_spread",
    name: "Terror Spread",
    type: "The Killer (Level 15)",
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/c/cc/TheKillerPerk01.png", 
    quote: '"I spoke to the the devil in Miami, he said everything will be fine."',
    description: "Survivors still feel helpless even after completing an objective. Each time Survivors complete repairing a Generator they will suffer from the Winded status effect for 20/30/40 seconds."
  },
  {
    id: "sloppy_mess",
    name: "Sloppy Mess",
    type: "The Killer (Level 30)",
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/f/fe/TheKillerPerk02.png", 
    quote: '"Who cares about inexperience if you leave a lasting impression."',
    description: "You leave bloody messes whenever you go. When hitting a survivor with a basic attack, the survivor will bleed more, making tracking them easier and slowing the speed for them be healed by 25/30/35%."
  },
  {
    id: "resentment_clinger",
    name: "Resentment Clinger",
    type: "The Killer (Level 45)",
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/3/3b/TheKillerPerk03.png", 
    quote: '"How\'s he even surviving gun shots?"',
    description: "You always remember the ones that did you wrong. Getting stunned gives you +1 Token, while successfully trapping Survivors in Spikes give you 2 Tokens up to a max of 3 Tokens. Each Token grants you a 30/40/50% lunge increase to your Basic Attacks. Using a Basic Attack consumes a Token."
  },
  {
    id: "echo_location",
    name: "Echo Location",
    type: "The Hidden (Level 15)",
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/7/7b/TheHiddenPerk01.png", 
    quote: '"In darkness, the bat whispers—and the world answers."',
    description: "You mastered the sense of hearing. When you break a generator you reveal all nearby Survivors within 100 studs for 3/4/5 seconds."
  },
  {
    id: "enhanced_senses",
    name: "Enhanced Senses",
    type: "The Hidden (Level 30)",
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/b/b3/TheHiddenPerk02.png", 
    quote: '"I see you."',
    description: "All those years being experimented gave you super human senses. When a survivor performs a rushed action, see their aura for 4/5/6 seconds. This perk then goes on cooldown of 30 seconds."
  },
  {
    id: "next_in_line",
    name: "Next in Line",
    type: "The Hidden (Level 45)",
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/1/19/TheHiddenPerk03.png", 
    quote: '"Red light for my eyes only."',
    description: "Smell the fear in the air. When you down a Survivor reveal the aura of the farthest Survivor for 6/7/8 seconds."
  },
  {
    id: "hard_swing",
    name: "Hard Swing",
    type: "The Masked (Level 15)",
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/c/c9/TheMaskedPerk01.png", 
    quote: '"Yes I like hurting people."',
    description: "Your hard swings cause the Survivors to feel dizzy. Applies the Winded status effect to the survivors after getting hit by a basic attack for 20/25/30 seconds."
  },
  {
    id: "combo_streak",
    name: "Combo Streak",
    type: "The Masked (Level 30)",
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/1/13/TheMaskedPerk02.png", 
    quote: '"us us usus us us."',
    description: "Chaining a combo is all you can think about. Successfully hitting a Survivor with a Basic Attack grants you a 5% Speed Boost for 11/12/13 seconds."
  },
  {
    id: "crackdown",
    name: "Crackdown",
    type: "The Masked (Level 45)",
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/8/87/TheMaskedPerk03.png", 
    quote: '"Classic fix to technology in the 90s."',
    description: "Increase the damage you deal to generators by 3/6/9 charges."
  },
  {
    id: "corrupted_path",
    name: "Corrupted Path",
    type: "The Abysswalker (Level 15)",
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/1/16/TheAbysswalkerPerk01.png", 
    quote: '"For I have availed you nothing."',
    description: "Hitting a survivor will make them release a corrupted trail that slows down anyone that touches it by 5% for 20/25/30 seconds."
  },
  {
    id: "abyssal_covenant",
    name: "Abyssal Covenant",
    type: "The Abysswalker (Level 30)",
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/0/0a/TheAbysswalkerPerk02.png", 
    quote: '"By "Them", by the Dark."',
    description: "Whenever any generator reaches 50% progression, there is a 30/40/50% chance it will corrupt, causing it to explode and trigger a loud sound notification. The explosion removes 5 charges per survivor working on the generator. This effect can only trigger once per generator and four times per match."
  },
  {
    id: "shadow_trace",
    name: "Shadow Trace",
    type: "The Abysswalker (Level 45)",
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/5/5c/TheAbysswalkerPerk03.png", 
    quote: '"Soon I will be consumed."',
    description: "At the start of the round, your killer's intent radius is nonexistent for 30/45/60 seconds. Additionally, whenever you spike a survivor, gain the undetectable status effect for 20 seconds."
  },
  {
    id: "piercing_reverie",
    name: "Piercing Reverie",
    type: "The Veil (Level 15)",
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/2/23/TheVeilPerk01.png", 
    quote: '"Your strikes distort time. Progress itself falters under your gaze."',
    description: "Each time a Survivor is hooked for the first time, block the Generator with the highest progress for 18 seconds, reveal it with a white aura, and increase the speed of any regression by 50% for 60/70/80 seconds."
  },
  {
    id: "blood_between_worlds",
    name: "Blood Between Worlds",
    type: "The Veil (Level 30)",
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/0/0c/TheVeilPerk02.png", 
    quote: '"The veil doesn\'t only hide you, it slows the world around you."',
    description: "Each time a survivor loses a health state by any means, 2 Generators with the most progress start regressing at 125/150/175% of the normal speed for 16 seconds. Additionally, if a Survivor works on the generator affected by this they suffer an 8% Repair Speed slowdown. This perk has a cooldown of 45 seconds."
  },
  {
    id: "echo_of_the_void",
    name: "Echo Of The Void",
    type: "The Veil (Level 45)",
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/1/18/TheVeilPerk03.png", 
    quote: '"He who is not bold enough to be stared at from across the abyss is not bold enough to stare into it himself."',
    description: "Whenever a Survivor within 150 studs looks at you for 1.5/1.2/0.9 seconds, play a sound cue, reveal their aura to you for 4 seconds, and make their view Monochrome. This effect cannot trigger on a Survivor for 30 seconds after downing them or on a spiked survivor. This perk has a cooldown of 40 seconds."
  },
  {
    id: "foundation_staff",
    name: "Foundation Staff",
    type: "The Cure (Level 15)",
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/0/06/Foundation_Staff_Perk.png", 
    quote: '"Doctor\'s orders."',
    description: "When a survivor unspikes another survivor or themselves, they gain a 20/30/40% reduction to healing speed for 45 seconds. The unspiked survivor suffers a 15% repair speed penalty until they are healed."
  },
  {
    id: "sustenance",
    name: "Sustenance",
    type: "The Cure (Level 30)",
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/5/51/Sustenance.png", 
    quote: '"Essential nutrients for the cure."',
    description: "Whenever you spike a survivor, gain a token. When you break a pallet, consume a token and slowdown survivors within your terror radius by 10% for 4/5/6 seconds and give them the silenced status effect for 25/30/35 seconds."
  },
  {
    id: "desire_for_the_living",
    name: "Desire For The Living",
    type: "The Cure (Level 45)",
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/e/ec/Desire_for_the_living.png", 
    quote: '"A thirst that cannot be quenched."',
    description: "Whenever a survivor sees your aura, you see theirs. Additionally, everytime you gain a speed boost, reveal your aura to the survivor nearest to you for 3 seconds. This effect has a cooldown of 40/30/20 seconds."
  },

  // --- SHOP PERKS ---
  {
    id: "all_seeing_eye",
    name: "All Seeing Eye",
    type: "Shop",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/5/5f/All_seeing_eye.png/revision/latest/scale-to-width-down/99?cb=20260609195513",
    quote: '"Call it random intuition..."',
    description: "If a generator is being worked on by 2 survivors at the same time for 5 seconds, it triggers a loud noise notification for the killer, and the aura of that generator is revealed for 3 seconds. This perk has a cooldown of 60/50/40 seconds."
  },
  {
    id: "eyes_of_hell",
    name: "Eyes of Hell",
    type: "Shop",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/4/44/Eyes_of_Hell.png/revision/latest/scale-to-width-down/100?cb=20260609195103",
    quote: '"I see you."',
    description: "You see the aura of all pallets, dropped pallets and vault locations within 80/90/100 studs. Whenever a survivor performs a vault, they suffer from 4% slowness for 5 seconds. This perk has a cooldown of 60/50/40 seconds."
  },
  {
    id: "trade_off",
    name: "Trade Off",
    type: "Shop",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/4/43/Trade_off.png/revision/latest/scale-to-width-down/100?cb=20260609191909",
    quote: '"Every time we save one... it only makes things worse."',
    description: "At the start of the trial, 2 random spikes are transformed into cursed spikes. Spikes affected by this perk are revealed to you through their aura. Whenever a survivor is saved from a normal spike, that spike becomes a cursed spike. Whenever a survivor is placed onto a cursed spike, the aura of the generator with the highest progress is revealed for 4/8/12 seconds."
  },
  {
    id: "deep_wound",
    name: "Deep Wound",
    type: "Shop",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/b/b7/Deep_Wound.png/revision/latest/scale-to-width-down/100?cb=20260609200039",
    quote: '"Some wounds don\'t close. They just wait for you to try."',
    description: "3 Cursed spikes spawn on the map. Whenever a survivor is unspiked from a cursed spike, they gain the anti heal status effect for 20/30/40 seconds and leave blood pools 100% more frequently."
  },
  {
    id: "exposure_therapy",
    name: "Exposure Therapy",
    type: "Shop",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/0/0d/Exposure_Therapy.png/revision/latest/scale-to-width-down/99?cb=20260609200558",
    quote: '"Look at them. Patching each other up, pretending it fixes anything... Go on. Watch what happens next."',
    description: "Damaging a survivor by any means grants you a token, up to a maximum of 8. Whenever a survivor finishes healing another survivor inside your terror radius, both survivors gain the vulnerable status effect for 10 seconds, as well as an additional 3/4/5 seconds of vulnerable and 1 second of aura reveal per token consumed, up to a maximum of 4. This perk has a cooldown of 30 seconds."
  },
  {
    id: "murderous_acrobatics",
    name: "Murderous Acrobatics",
    type: "Shop",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/b/bc/Murderous_Acrobatics.png/revision/latest/scale-to-width-down/99?cb=20260609194030",
    quote: '"If you\'re going to run... make it interesting."',
    description: "Killing only satisfies you when it\'s done with style. Once every 60 seconds, while in a chase, you vault windows 30% faster. After vaulting this way, you gain a 3%/4%/5% haste status effect for 4 seconds."
  },
  {
    id: "stage_fright",
    name: "Stage Fright",
    type: "Shop",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/f/f9/Stage_Fright.png/revision/latest/scale-to-width-down/100?cb=20260609193205",
    quote: '"You wanted to see me... now don\'t look away."',
    description: "Whenever your aura is revealed to a survivor, you gain a 5/6/7% speed boost for the duration of the reveal."
  },
  {
    id: "containment",
    name: "Containment",
    type: "Shop",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/6/61/Containment.png/revision/latest/scale-to-width-down/100?cb=20260609182130",
    quote: '"Containing survivors is of utmost importance."',
    description: "Whenever you vault a window, you vault 5/10/15% faster and block the window for 16 seconds. (You can still vault the window)."
  },
  {
    id: "touch_of_death",
    name: "Touch Of Death",
    type: "Shop",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/7/7d/Touch_of_Death.png/revision/latest/scale-to-width-down/99?cb=20260609185331",
    quote: '"They say the Angel of Death doesn\'t knock, it just waits for you to pass through."',
    description: "Death lingers wherever you go. Vaulting a window applies Touch of Death to it. You can see its aura in white, and you vault affected windows 20% faster. You can have up to 2 affected windows at a time. When a Survivor vaults a Touch of Death window, they suffer from the Exposed Status Effect for 15/20/25 seconds, and their aura is revealed for 2 seconds. The effect is then removed from that window."
  },
  {
    id: "kings_scourge",
    name: "King's Scourge",
    type: "Shop",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/2/24/King%27s_Scourge.png/revision/latest?cb=20260609191510",
    quote: '"Bewitched with the strength of the King\'s untold army, he leaves you one final gift, unleash the flurry of merciless rage..."',
    description: "Once per Generator, Generators that reach 90% progress have their Aura revealed and play a Loud Sound Notification. Survivors repairing affected Generators receive 9/12/15 Special Skill Checks. Generator repair progress is paused until all Skill Checks are hit. If a Special Skill Check is failed, Survivors repairing become Vulnerable and have 10% decreased Repair Speed for 5/10/15 seconds, the Generator loses 15 Charges, and regresses at double the normal rate."
  }
];

// --- LISTA COMPLETA DE ITENS DE SURVIVOR ---
const survivorItemsData = [
  {
    id: "twist_of_fate",
    name: "Twist of Fate",
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/9/9d/IconTwistOfFate.png/revision/latest/scale-to-width-down/130?cb=20260101161514",
    quote: '"This gamble isn’t just a matter of leaving it to fate!"',
    description: "This hellforged firearm carries your soul in its chamber. Gain the ability to aim and fire the weapon with a 60% chance of firing and a 40% chance to misfire. Successfully shooting the killer will result in them getting stunned for 2 seconds, a misfire will result in losing a health state."
  },
  {
    id: "bandage",
    name: "Bandage",
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/a/ad/IconBandage.png/revision/latest/scale-to-width-down/130?cb=20260101161322",
    quote: '""',
    description: "A simple bandage that lets you recover two health states, taking 24 seconds for a full heal."
  },
  {
    id: "parrying_dagger",
    name: "Parrying Dagger",
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/4/47/IconParryingDagger.png/revision/latest/scale-to-width-down/130?cb=20260101161439",
    quote: '"A favorite of the knights of Carim, who are famous for fighting without a shield."',
    description: "Flick your dagger into a guarding stance that protects you. After use, gain the ability to parry the killer’s attack for 0.8 seconds. Parrying the killer will stun them for 4 seconds. This item goes on a 90 second cooldown if you successfully parry, otherwise goes on a 60 second cooldown."
  },
  {
    id: "adrenaline_shot",
    name: "Adrenaline Shot",
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/2/2c/IconAdrenalineShot.png/revision/latest/scale-to-width-down/130?cb=20260101161306",
    quote: '"Side effects include amplified mustache growth and sudden confidence."',
    description: "Inject this adrenaline shot for a little boost to your heart rate, using this item normally will give you a 7% speed boost for 10 seconds with a 6.55% slowdown for 3 seconds afterwards. If you use this item whilst in the dying state, pick yourself back up for 12 seconds [returning to dying state afterward]. This item has a 60 second cooldown."
  },
  {
    id: "flashlight",
    name: "Flashlight",
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/d/dd/IconFlashlight.png/revision/latest/scale-to-width-down/130?cb=20260101161340",
    quote: '""',
    description: "Shining this flashlight on the killer's face will cause blindness and force them to drop any survivor they are holding.\nDuration: 20 seconds.\nTime to completely blind the killer: 2~4 (depends on range)"
  },
  {
    id: "motion_tracker",
    name: "Motion Tracker",
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/4/44/IconMotionTracker.png/revision/latest/scale-to-width-down/130?cb=20260101161410",
    quote: '"Weee wooo"',
    description: "Your ingenuity always puts you one step ahead. Hold down the item to activate the tracker, this will result in the tracker beeping faster and pitchier depending how close the killer is within a 250 radius.\nUsage duration: Infinite."
  },
  {
    id: "gate",
    name: "Gate",
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/d/de/IconGate.png/revision/latest/scale-to-width-down/130?cb=20260101161353",
    quote: '"Crimson horns, With gem cut eyes, An apple fell, From a serpent lies"',
    description: "Never been a fan of much walking. Allows you to spawn a teleport point that lasts for 7 seconds to a random place on the map. Creating the teleport takes 3 seconds, you cannot run during this windup. After use goes on a 60 second cooldown, if interrupted goes on a 5 second cooldown instead."
  },
  {
    id: "shadow_clone",
    name: "Shadow Clone",
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/c/c3/IconShadowClone.png/revision/latest/scale-to-width-down/130?cb=20260101161451",
    quote: '""',
    description: "Perform a sequence of hand signs, conjuring a thick cloud of smoke. From the smoke emerges a clone that runs forward in the direction you were facing to either disorient or fool the killer. This item goes on cooldown for 60 seconds after being used, or 5 seconds if interrupted."
  },
  {
    id: "waxbound_candle",
    name: "WaxBound Candle",
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/5/51/IconWaxBoundCandle.png/revision/latest/scale-to-width-down/130?cb=20260101161538",
    quote: '"Born from the machine\'s own wax, its light betrays his creator"',
    description: "A bound between the survivor and the candle. For 6 uses, reveal the Aura of The Killer for 5 seconds. The Candle then goes on cooldown for 30 seconds."
  },
  {
    id: "holy_water",
    name: "Holy Water",
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/5/5e/Holy_water.png/revision/latest/scale-to-width-down/130?cb=20260522160228",
    quote: '"Blessed by a member of the clergy"',
    description: "Never been a fan of vampires and mythical creatures alike. Throw to create an 8-stud radius area that slows the Killer by up to 18%. The area lasts for 10 seconds and slows the Killer by 6% every 0.5 seconds. The Killer recovers 6% per second after leaving the area. This item has a 60-second cooldown."
  },
  {
    id: "riot_shield",
    name: "Riot Shield",
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/c/c0/Riot_shield.png/revision/latest/scale-to-width-down/130?cb=20260522160742",
    quote: '"WARNING: this item requires massive courage."',
    description: "There's no stopping until you hit a target. Start from walking speed and ramp up to 18 studs per second over the course of 4 seconds. This charge can last up to 35 seconds or until you hit a wall or the killer. If you were charging for at least 3 seconds, the killer will be stunned. This item has a 50 second cooldown."
  }
];

// --- LISTA DE PERKS DE SURVIVOR ---
const survivorPerksData = [
  {
    id: "born_in_blood",
    name: "Born in Blood",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://i.pinimg.com/736x/4b/20/f6/4b20f651cfaf752f103469e82d3ffa33.jpg",
    quote: '"Born in blood... both of us."',
    description: "When a heal action on another Survivor started by you finishes, you and the healed Survivor gain a 10/20/30% Speed boost for 6 seconds."
  },
  {
    id: "flowstate",
    name: "Flowstate",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/9/9a/Flowstate.png.png/revision/latest?cb=20251208175700",
    quote: '"I understand it now."',
    description: "When you perform a fast window vault while this perk is active, you vault 20% quicker with a special animation. This perk has a cooldown of 70/60/50 seconds."
  },
  {
    id: "great_collapse",
    name: "Great Collapse",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/5/58/GreatCollapse.png.png/revision/latest?cb=20251126183243",
    quote: '"Fighting back is always an option... and running away after."',
    description: "Whenever you stun the killer using a pallet, gain 20/30/40% speed boost for 2/2/3 seconds. This perk does not activate whilst you have the winded status effect. Applies the winded status effect for 40 seconds after triggering."
  },
  {
    id: "perfect_landing",
    name: "Perfect Landing",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://www.destructoid.com/wp-content/uploads/2025/10/perfect-landing-perk-violence-district.png",
    quote: '"it\'s not just cool, it\'s practical too."',
    description: "When falling from heights, recover 75% faster and gain a 40% Speed boost for 3 seconds. This perk does not activate whilst you have the Winded Status Effect. Applies the Winded Status Effect for 60/50/40 seconds after triggering."
  },
  {
    id: "quick_recovery",
    name: "Quick Recovery",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/d/d0/QuickRecovery.png/revision/latest?cb=20260122231922",
    quote: '"The icing on the cake."',
    description: "Jumping over obstacles became natural to you. Whenever you fast or medium vault a window, gain a 40% speed boost for 3 seconds. This perk does not activate whilst you have the winded status effect. This perk applies the winded status effect for 70/60/50 seconds after use."
  },
  {
    id: "snake_step",
    name: "Snake Step",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/b/b1/SnakeStep.png.png/revision/latest?cb=20251126184710",
    quote: '"HSSSSSSSSSS - a snake idk."',
    description: "While crouched, stop the killer from revealing your aura. This effect has a cooldown of 45 seconds. Additionally, this perk increases your crouching speed by 90/100/110%."
  },
  {
    id: "time_to_grow_up",
    name: "Time To Grow Up",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://www.destructoid.com/wp-content/uploads/2025/10/time-to-grow-up-perk-violence-district.png",
    quote: '"You with me man? Time to grow up."',
    description: "Increases the duration of the speed boost after being hit by 1/2/3 seconds."
  },
  {
    id: "were_stronger_together",
    name: "We're Stronger Together",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://www.destructoid.com/wp-content/uploads/2025/10/we-are-stronger-together-perk-violence-district.png",
    quote: '"ape together strong."',
    description: "Whenever you are within 15 studs of any survivor, every survivor within the range gains a 4/5/6% speed boost."
  },
  {
    id: "against_all_odds",
    name: "Against All Odds",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/a/a3/Screenshot_2026-08-30_153114.png/revision/latest?cb=20260830123226",
    quote: '"My destiny is in no man\'s hand but mine."',
    description: "You're only precise when it matters the most. Whilst healing a survivor in the dying state (downed), gain a 50/60/70% healing speed boost, and reveal the aura of the killer."
  },
  {
    id: "ambitious_medic",
    name: "Ambitious Medic",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/d/dd/AmbitiousMedic.png/revision/latest?cb=20260526145832",
    quote: '"I\'ve always wanted to be a doctor but fate had other plans..."',
    description: "Whenever you are injured, and land a great skill check, your healing progress will be recovered by 2 charges; this effect has a sound cue when triggered. This perk also increases your default skill check trigger chance by 40% (skill checks appear more often). Additionally, healing skill checks will be 40% slower (the skill check rotation) if both survivors are using this perk.\n\n(NOTE: It takes approximately 7 great skill checks to fully heal yourself with this perk, not including outside help.)"
  },
  {
    id: "enhanced_touch",
    name: "Enhanced Touch",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://www.destructoid.com/wp-content/uploads/2025/10/enhanced-touch-perk-violence-district.png",
    quote: '"Talent beats hard work."',
    description: "After a heal action on another survivor started by you finishes, the healed survivor gains a 10% boost to healing and repairing, plus a 5% boost to movement for 20/25/30 seconds."
  },
  {
    id: "expensive_decor",
    name: "Expensive Decor",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://www.destructoid.com/wp-content/uploads/2025/10/expensive-decor-perk-violence-district.png",
    quote: '"Never the same."',
    description: "Increase the speed other Survivors heal you by 30/40/50%. Half of this increase is replaced by an additive 10% Healing speed boost each time you get spiked."
  },
  {
    id: "grab_my_hand",
    name: "Grab My Hand",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://www.destructoid.com/wp-content/uploads/2025/10/grab-my-hand-perk-violence-district.png",
    quote: '"C\'mon get out of here."',
    description: "After you unspike a survivor, you gain a 75% healing speed boost for 45/60/75 seconds."
  },
  {
    id: "nobody_left_behind",
    name: "Nobody Left Behind",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://www.destructoid.com/wp-content/uploads/2025/10/nobody-left-behind-perk-violence-district.png",
    quote: '"Let\'s make it out of here."',
    description: "When the gates are powered, reveal the aura of every survivor to you and gain a 55/65/75% boost to healing and unspiking."
  },
  {
    id: "pacifist",
    name: "Pacifist",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://www.destructoid.com/wp-content/uploads/2025/10/pacifist-perk-violence-district.png",
    quote: '"Strength in numbers... or not.."',
    description: "Gain a permanent 20% healing speed boost. This is increased by an additional 5/7/10% per survivor missing from the normal 5 by any means."
  },
  {
    id: "absolute_confidence",
    name: "Absolute Confidence",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/6/61/AbsoluteConfidence.png/revision/latest?cb=20260122235029",
    quote: '"Ladies, I\'ve got this."',
    description: "Whilst you are in a chase, survivors within 180 studs will gain a 3/5/7% action speed boost and have their aura revealed to you."
  },
  {
    id: "call_me_back",
    name: "Call Me Back",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://www.destructoid.com/wp-content/uploads/2025/10/call-me-back-perk-violence-district.png",
    quote: '"Hello? Yeah it happened again."',
    description: "Communication is key. When a survivor you healed gets hit by the killer, their aura will be revealed to you for 20/30/40 seconds."
  },
  {
    id: "debut_showcase",
    name: "Debut Showcase",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/2/26/DebutShowcase.png/revision/latest?cb=20260526145800",
    quote: '"Is this an audition or a movie?"',
    description: "Whenever you parry, stun or blind the killer, the aura of the killer will be revealed to every survivor for 3/4/5 seconds."
  },
  {
    id: "eyes_of_heaven",
    name: "Eyes of Heaven",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/f/fc/EyesOfHeaven.png/revision/latest?cb=20260122235116",
    quote: '"Yes the name is a jojo reference."',
    description: "The aura of all pallets and windows are revealed to you within an 80/90/100 stud range."
  },
  {
    id: "familiar_soul",
    name: "Familiar Soul",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/5/5b/Familiar_Soul.png/revision/latest?cb=20260608200029",
    quote: '"You spend enough time with someone, you don\'t need eyes to find them."',
    description: "Years of hardship to escape this nightmare made you all familiar with each other. The aura of all survivors is revealed to you within an 80/100/120 stud range."
  },
  {
    id: "hearing_aid",
    name: "Hearing Aid",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/0/05/HearingAid.png/revision/latest?cb=20260122235144",
    quote: '"Gosh this guy\'s really loud"',
    description: "Whenever the killer breaks a pallet or damages a generator within a 240 stud range, reveal the aura of the killer for 4/5/6 seconds."
  },
  {
    id: "on_my_own",
    name: "On My Own",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://www.destructoid.com/wp-content/uploads/2025/10/on-my-own-perk-violence-district.png",
    quote: '"Still ain\'t given up yet."',
    description: "When you are the last survivor alive, reveal the aura of the killer for 10 seconds and gain a 40/50/60% opening speed boost."
  },
  {
    id: "perfectionist_planning",
    name: "Perfectionist Planning",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/a/ab/PerfectionistPlanning.png/revision/latest?cb=20260526145713",
    quote: '"Strategy won more wars than muscles."',
    description: "The aura of the 3 unrepaired generators closest are revealed to you. Repairing these generators allows you to repair them 10% faster, as well as revealing their aura to other survivors for 35/45/55 seconds. Repairing any other generator is 5% slower."
  },
  {
    id: "visual_learner",
    name: "Visual Learner",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/1/1f/VisualLearner.png/revision/latest?cb=20260526145600",
    quote: '"My minds eye guides me through the dark"',
    description: "A perk that increases the duration by 2 seconds in which auras are shown to you. Alongside that, gain tokens when generators are completed, using the tokens when you fast vault a window to reveal the aura of the killer to you."
  },
  {
    id: "built_different",
    name: "Built Different",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/2/26/BuiltDifferent.png/revision/latest?cb=20260526145539",
    quote: '"Did you really think I was some random?"',
    description: "Your plot armor always comes in clutch. Whenever you heal up from the dying state by any means, gain the endurance status effect for 6/7/8 seconds. Additionally allows you to pick yourself back up from the dying state once per round."
  },
  {
    id: "desperate",
    name: "Desperate",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/c/c8/DesperateUpdated.png/revision/latest?cb=20260122230825",
    quote: '"No, no, no, no! Wait, wait, wait!"',
    description: "Desperate times create desperate measures. After being picked up by the killer, instantly gain 10/15/20% wiggle progression."
  },
  {
    id: "flawless_execution",
    name: "Flawless Execution",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/3/36/FlawlessExecution.png/revision/latest?cb=20260526145731",
    quote: '"A puzzle is always easier the second time solving it"',
    description: "While repairing a Generator and hitting consecutive great skill checks while alone, gain a 3%/4%/5% Repair speed boost until you miss. After your third consecutive great skill checks, this effect is increased by an additional 1%/2%/3%. Each skill check you hit decreases the duration of the next by 0.05/0.075/0.1 seconds until you miss. You have an 8/10/12 seconds window to return to your generator after leaving."
  },
  {
    id: "group_project",
    name: "Group Project",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://www.destructoid.com/wp-content/uploads/2025/10/group-project-perk-violence-district.png",
    quote: '"I\'m telling you it\'s the red wire first then the yellow now get movin"',
    description: "Gain a 3/5/7% repair speed per survivor on the same generator as you. This effect is shared to every other survivor repairing the generator. Does not stack with itself if two or more survivors are using it."
  },
  {
    id: "heads_up",
    name: "Heads Up",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/f/f9/HeadsUp.png.png/revision/latest?cb=20251126184831",
    quote: '"Did you hear that?"',
    description: "When the killer gets within a 50 stud range of you, receive a sound cue, reveal the aura of the killer, and gain a 10/15/20% speed boost for 3 seconds. This perk does not activate whilst you have the winded status effect. Applies the winded status effect for 40 after triggering."
  },
  {
    id: "high_karma",
    name: "High Karma",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://www.destructoid.com/wp-content/uploads/2025/10/high-karma-perk-violence-district.png",
    quote: '"What you give you get back."',
    description: "The universe never forgets good deeds. After unspiking a survivor, this perk activates, allowing you to successfully unspike yourself the first time you get spiked. Unspiking yourself with this perk applies the anti heal status effect for 90/75/60 seconds."
  },
  {
    id: "intense_workout",
    name: "Intense Workout",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://www.destructoid.com/wp-content/uploads/2025/10/intense-workout-perk-violence-district.png",
    quote: '"U \'mirin my biceps brah?"',
    description: "Whenever you unspike a survivor, you do it 40/45/50% faster and give them a 10% speed boost for 8 seconds."
  },
  {
    id: "iron_tranquility",
    name: "Iron Tranquility",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/4/4d/IronTranquilityRed2.png/revision/latest?cb=20260122230500",
    quote: '"What do you mean I\'m spiked? I\'m perfectly fine."',
    description: "Your willpower transcends torment. Whilst on the spike, your aura is hidden from the killer. Additionally, this perk decreases the lifetime of your blood pools by 3/4/5 seconds."
  },
  {
    id: "last_stand",
    name: "Last Stand",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/5/50/LastStandUpdated.png/revision/latest?cb=20260122230942",
    quote: '"I must stand my ground, through the grief, through the loss, I will pass, for them, for all."',
    description: "When the escape gates are powered, heal a soul state and reveal the aura of the killer for 10/15/20 seconds."
  },
  {
    id: "left_behind",
    name: "Left Behind",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://www.destructoid.com/wp-content/uploads/2025/10/left-behind-perk-violence-district.png",
    quote: '"I\'ll make it out just to spite them."',
    description: "When the escape gates are powered, gain a 5/6/7% speed boost until the end of the round."
  },
  {
    id: "no_pain_no_gain",
    name: "No Pain No Gain",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/2/22/NoPainNoGain.png/revision/latest?cb=20260526145318",
    quote: '"If you want it hard enough, you\'ll suffer close enough."',
    description: "Become permanently injured and gain the ability to self recover from the dying state. This perk additionally stops the creation of blood pools and provides a 20/25/30% self recovery speed boost."
  },
  {
    id: "on_screen_fear",
    name: "On Screen Fear",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/e/ea/OnScreenFear.png/revision/latest?cb=20260123000904",
    quote: '"Nothing more cliche than reusing a perk name."',
    description: "Whenever you are in the terror radius of the killer and not in chase, gain a 1/2/3% movement speed boost and a 5/8/10% boost to healing and repairing."
  },
  {
    id: "partners_in_crime",
    name: "Partners In Crime",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/c/c8/PartnersInCrime.png/revision/latest?cb=20260526145126",
    quote: '"If we wanna do this, we\'re gonna have to work together."',
    description: "When it's just you and your duo, you can work together to accomplish the impossible. When you and another survivor are both in the killer's terror radius for 15 seconds but not in chase, gain one token, up to 3. For every token you have, you gain a 2/3/4% repair speed bonus. You lose one token every 25 seconds while not repairing a generator, and you lose 1 token upon entering chase."
  },
  {
    id: "second_wind",
    name: "Second Wind",
    price: 250,
    priceIcon: EMBLEM_ICON,
    icon: "https://static.wikia.nocookie.net/violencedistrict/images/6/6d/SecondWind.png.png/revision/latest?cb=20251126192653",
    quote: '"Bring a pick axe while you\'re at it, tunneler!"',
    description: "The Jester hates tunnelers and grants you a blessing. After you are unspiked, increase the duration of the endurance status effect by 15/20/25 seconds."
  }
];

// --- ESTADO GLOBAL ---
let currentRole = null;
let selectedKiller = null;
let equippedPerks = [null, null, null];

let selectedItem = null;
let equippedSurvivorPerks = [null, null, null];

let currentEditingSlot = null;

// --- FUNÇÕES DE BUSCA COM FALLBACK DE PROPRIEDADES ---
function getPerk(perkInput) {
  if (!perkInput) return null;

  // 1. Extrai o nome da Perk (seja String ou Objeto)
  let nameToSearch = "";
  if (typeof perkInput === "string") {
    nameToSearch = perkInput;
  } else if (typeof perkInput === "object") {
    nameToSearch = perkInput.name || perkInput.perkName || "";
  }

  nameToSearch = nameToSearch.trim().toLowerCase();

  // 2. Junta TODAS as tuas fontes de dados possíveis num só array para procurar
  const allAvailablePerks = [
    ...(typeof perksData !== "undefined" && Array.isArray(perksData) ? perksData : []),
    ...(typeof survivorPerksData !== "undefined" && Array.isArray(survivorPerksData) ? survivorPerksData : []),
    ...(typeof killerPerksData !== "undefined" && Array.isArray(killerPerksData) ? killerPerksData : []),
    ...(typeof survivorPerks !== "undefined" && Array.isArray(survivorPerks) ? survivorPerks : []),
    ...(typeof killerPerks !== "undefined" && Array.isArray(killerPerks) ? killerPerks : [])
  ];

  // 3. Procura a perk pelo nome
  let found = allAvailablePerks.find(p => p && p.name && p.name.trim().toLowerCase() === nameToSearch);

  if (found) {
    const imgPath = found.icon || found.image || found.iconUrl || found.img || found.icon_url || found.image_url || "";
    const rarityVal = found.rarity || found.tier || "Very Rare";
    
    return {
      ...found,
      name: found.name,
      icon: imgPath,
      image: imgPath,
      rarity: (!rarityVal || rarityVal === "undefined") ? "Very Rare" : rarityVal,
      description: found.description || ""
    };
  }

  // 4. Se não encontrou nos arrays globais mas o próprio perkInput era um objeto válido
  if (typeof perkInput === "object") {
    const imgPath = perkInput.icon || perkInput.image || perkInput.iconUrl || perkInput.img || perkInput.icon_url || "";
    const rarityVal = perkInput.rarity || perkInput.tier || "Very Rare";

    return {
      ...perkInput,
      name: perkInput.name || "Perk",
      icon: imgPath,
      image: imgPath,
      rarity: (!rarityVal || rarityVal === "undefined") ? "Very Rare" : rarityVal,
      description: perkInput.description || ""
    };
  }

  // 5. Se foi passada apenas uma String que não existe nos dados globais
  return { 
    name: perkInput, 
    icon: "", 
    image: "", 
    rarity: "Very Rare", 
    description: "Descrição não encontrada." 
  };
}

function getItem(itemInput) {
  if (!itemInput) return null;

  // Se já for um objeto com imagem válida, devolve-o
  if (typeof itemInput === 'object' && (itemInput.icon || itemInput.image || itemInput.iconUrl)) {
    const imgPath = itemInput.icon || itemInput.image || itemInput.iconUrl;
    return { ...itemInput, icon: imgPath, image: imgPath };
  }

  // Se for uma string (ou objeto só com nome), extrai o nome
  let nameToSearch = typeof itemInput === 'string' ? itemInput : (itemInput.name || '');
  nameToSearch = nameToSearch.trim().toLowerCase();

  if (!nameToSearch) return null;

  // Procura nos teus arrays globais de itens
  const allItems = [
    ...(typeof itemsData !== 'undefined' && Array.isArray(itemsData) ? itemsData : []),
    ...(typeof survivorItemsData !== 'undefined' && Array.isArray(survivorItemsData) ? survivorItemsData : []),
    ...(typeof items !== 'undefined' && Array.isArray(items) ? items : [])
  ];

  const found = allItems.find(i => i && i.name && i.name.trim().toLowerCase() === nameToSearch);

  if (found) {
    const imgPath = found.icon || found.image || found.iconUrl || found.img || '';
    return { ...found, icon: imgPath, image: imgPath };
  }

  // Fallback se o objeto trazia nome
  return typeof itemInput === 'object' ? itemInput : { name: itemInput, icon: '', image: '' };
}

const getKiller = (name) => {
  if (!name) return null;
  if (typeof name === "object") name = name.name || "";

  if (typeof killersData !== "undefined" && Array.isArray(killersData)) {
    const found = killersData.find(k => k && k.name && k.name.trim().toLowerCase() === String(name).trim().toLowerCase());
    if (found) return found;
  }
  return { name: name, icon: "", image: "" };
};

function loadBuild(id) {
  let userBuilds = JSON.parse(localStorage.getItem("vd_saved_builds")) || [];
  let allBuilds = [...presetBuilds, ...userBuilds];
  const build = allBuilds.find(b => String(b.id) === String(id));

  if (!build) return;

  // 1. Atualiza a role atual
  currentRole = build.role ? build.role.toLowerCase() : "killer";
  const isKiller = currentRole === "killer";

  // 2. Extrai e converte as perks (caso sejam nomes/strings)
  const loadedPerks = (build.perks || build.perkNames || []).map(p => {
    if (!p) return null;
    return typeof p === 'string' ? getPerk(p) : p;
  });

  if (isKiller) {
    // Carrega o Killer e as respetivas 3 Perks de Killer
    selectedKiller = build.character || null;
    equippedPerks = [
      loadedPerks[0] || null,
      loadedPerks[1] || null,
      loadedPerks[2] || null
    ];
  } else {
    // Carrega o Item e as 3 Perks de Survivor
    selectedItem = build.item || build.selectedItem || null;
    equippedSurvivorPerks = [
      loadedPerks[0] || null,
      loadedPerks[1] || null,
      loadedPerks[2] || null
    ];
  }

  // 3. Muda para a vista correta do editor de HTML ("editor-view")
  showView("editor-view");

  // 4. Renderiza os componentes do editor
  if (typeof renderBuilderLayout === "function") renderBuilderLayout();
  if (typeof updateDetailsPanel === "function") updateDetailsPanel();
}

// --- BUILDS PRÉ-FEITAS (VIOLENCE DISTRICT) ---
const presetBuilds = [
  // KILLERS
  { id: "preset-k1", name: "Jason Nowhere to Hide", role: "killer", isPreset: true, character: getKiller("The Slasher"), perks: [getPerk("Offscreen Scare"), getPerk("Combo Streak"), getPerk("Play with your food")], date: "Official" },
  { id: "preset-k2", name: "Blood Moon Myers", role: "killer", isPreset: true, character: getKiller("The Stalker"), perks: [getPerk("Deep Wound"), getPerk("Sloppy Mess"), getPerk("Foundation Staff")], date: "Official" },
  { id: "preset-k3", name: "Jeff Doesnt Like Gens", role: "killer", isPreset: true, character: getKiller("The Killer"), perks: [getPerk("Offscreen Scare"), getPerk("Piercing Reverie"), getPerk("Blood Between Worlds")], date: "Official" },
  { id: "preset-k4", name: "You Cant Loop The Hidden", role: "killer", isPreset: true, character: getKiller("The Hidden"), perks: [getPerk("Brutal Strength"), getPerk("Combo Streak"), getPerk("Murderous Acrobatics")], date: "Official" },
  { id: "preset-k5", name: "Masked Anti-heal", role: "killer", isPreset: true, character: getKiller("The Masked"), perks: [getPerk("Brutal Strength"), getPerk("Sustenance"), getPerk("Deep Wound")], date: "Official" },
  { id: "preset-k6", name: "Silent Abysswalker", role: "killer", isPreset: true, character: getKiller("The Abysswalker"), perks: [getPerk("Shadow Trace"), getPerk("Offscreen Scare"), getPerk("Next in Line")], date: "Official" },
  { id: "preset-k7", name: "Orbital Veil", role: "killer", isPreset: true, character: getKiller("The Veil"), perks: [getPerk("Piercing Reverie"), getPerk("Blood Between Worlds"), getPerk("Next in Line")], date: "Official" },
  { id: "preset-k8", name: "Cure the Gens", role: "killer", isPreset: true, character: getKiller("The Cure"), perks: [getPerk("King's Scourge"), getPerk("Blood Between Worlds"), getPerk("Crackdown")], date: "Official" },

  // SURVIVORS
  { id: "preset-s1", name: "Gen Rush", role: "survivor", isPreset: true, item: getItem("Gate"), perks: [getPerk("Flawless Execution"), getPerk("Group Project"), getPerk("Perfectionist Planning")], date: "Official" },
  { id: "preset-s2", name: "Looping Build", role: "survivor", isPreset: true, item: getItem("Parrying Dagger"), perks: [getPerk("Flowstate"), getPerk("Quick Recovery"), getPerk("Eyes of Heaven")], date: "Official" },
  { id: "preset-s3", name: "Medic", role: "survivor", isPreset: true, item: getItem("Bandage"), perks: [getPerk("Against All Odds"), getPerk("Expensive Decor"), getPerk("Nobody Left Behind")], date: "Official" },
  { id: "preset-s4", name: "Save Build", role: "survivor", isPreset: true, item: getItem("Twist of Fate"), perks: [getPerk("No Pain No Gain"), getPerk("Expensive Decor"), getPerk("Pacifist")], date: "Official" }
];

// --- NAVEGAÇÃO E INTERFACE ---
function updateRoleUI() {
  const btn = document.getElementById('btn-toggle-role');
  if (!btn) return;
  btn.textContent = (currentRole === 'survivor') ? 'Switch to Killer' : 'Switch to Survivor';
}

function showView(viewId) {
  document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
  const target = document.getElementById(viewId);
  if (target) target.classList.add('active');

  const toggleBtn = document.getElementById('btn-toggle-role');
  if (toggleBtn) {
    toggleBtn.style.display = (viewId === 'home-view') ? 'none' : 'inline-block';
  }
}

function openRoleView(role) {
  currentRole = role;
  updateRoleUI();

  const listTitle = document.getElementById("list-title");
  if (listTitle) {
    listTitle.innerText = role === "survivor" ? "Survivor Builds" : "Killer Builds";
  }

  showView("list-view");
  renderBuilderLayout();
  updateDetailsPanel();
  renderSavedBuildsList();
}

function toggleRole() {
  currentRole = (currentRole === "killer") ? "survivor" : "killer";
  updateRoleUI();

  const listTitle = document.getElementById("list-title");
  if (listTitle) {
    listTitle.innerText = currentRole === "survivor" ? "Survivor Builds" : "Killer Builds";
  }

  renderBuilderLayout();
  updateDetailsPanel();
  renderSavedBuildsList();
}

// --- GUARDAR E GERIR BUILDS ---
function saveCurrentBuild() {
  const isKiller = (currentRole || "killer").toLowerCase() === "killer";
  const perksList = isKiller ? equippedPerks : equippedSurvivorPerks;

  // 1. Lê o nome a partir do novo input do HTML
  const nameInput = document.getElementById("build-name-input");
  const nameVal = nameInput ? nameInput.value.trim() : "";

  // 2. Garante que o item é apanhado quer seja objeto quer seja string
  let savedItem = null;
  if (!isKiller && selectedItem) {
    savedItem = typeof selectedItem === 'object' ? selectedItem : getItem(selectedItem);
  }

  const newBuild = {
    id: Date.now().toString(),
    name: nameVal || (isKiller ? "New Killer Build" : "New Survivor Build"),
    role: currentRole || "survivor",
    character: isKiller ? selectedKiller : null,
    item: savedItem,
    perks: Array.isArray(perksList) ? [...perksList] : [null, null, null],
    date: new Date().toLocaleDateString("pt-PT")
  };

  let savedBuilds = JSON.parse(localStorage.getItem("vd_saved_builds")) || [];
  savedBuilds.push(newBuild);
  localStorage.setItem("vd_saved_builds", JSON.stringify(savedBuilds));

  alert("Build saved successfully!");

  if (typeof resetBuilder === "function") resetBuilder();
  if (typeof showView === "function") showView("list-view");
  if (typeof renderSavedBuildsList === "function") renderSavedBuildsList();
}

function deleteBuild(id) {
  let savedBuilds = JSON.parse(localStorage.getItem("vd_saved_builds")) || [];
  savedBuilds = savedBuilds.filter(b => String(b.id) !== String(id));
  localStorage.setItem("vd_saved_builds", JSON.stringify(savedBuilds));
  renderSavedBuildsList();
}

function resetBuilder() {
  selectedKiller = null;
  selectedItem = null;
  equippedPerks = [null, null, null];
  equippedSurvivorPerks = [null, null, null];
  
  // Limpa o campo do nome
  const nameInput = document.getElementById("build-name-input");
  if (nameInput) nameInput.value = "";

  renderBuilderLayout();
  updateDetailsPanel();
}

// --- RENDERIZAÇÃO DA LISTA DE BUILDS GUARDADAS ---
function renderSavedBuildsList() {
  const grid = document.getElementById("builds-grid-container");
  if (!grid) return;

  const activeRole = (currentRole || "killer").toLowerCase();
  const searchInput = document.getElementById("search-builds") || document.querySelector('input[placeholder*="Search"]');
  const query = searchInput ? searchInput.value.toLowerCase().trim() : "";

  let userBuilds = JSON.parse(localStorage.getItem("vd_saved_builds")) || [];
  let allBuilds = [...presetBuilds, ...userBuilds];

  const roleBuilds = allBuilds.filter(b => {
    const matchesRole = b.role && b.role.toLowerCase() === activeRole;
    const matchesSearch = !query || (b.name && b.name.toLowerCase().includes(query));
    return matchesRole && matchesSearch;
  });

  if (roleBuilds.length === 0) {
    grid.innerHTML = `<p style="color:#777; grid-column: 1 / -1; margin: 0; padding: 20px 0;">No build found.</p>`;
    return;
  }

  grid.innerHTML = roleBuilds.map(build => {
    const isSurvivor = build.role && build.role.toLowerCase() === "survivor";

    // Extrai as perks
    const perksList = (build.perks || build.perkNames || []).map(p => getPerk(p));

    // Resolve o Item de qualquer propriedade onde possa ter sido guardado
    const rawItem = build.item || build.selectedItem || build.equippedItem || build.character;
    let resolvedItem = rawItem ? getItem(rawItem) : null;

    // Se ainda assim não encontrou e for survivor, tenta procurar o objeto do item na app se existir nome
    if (isSurvivor && !resolvedItem && typeof rawItem === 'string') {
      resolvedItem = getItem(rawItem);
    }

    // 1. Determinar o ícone e nome principal (Lado Esquerdo)
    let displayIcon = null;
    let displayName = "";

    if (isSurvivor) {
      if (resolvedItem && (resolvedItem.icon || resolvedItem.image)) {
        displayIcon = resolvedItem.icon || resolvedItem.image;
        displayName = resolvedItem.name || "Item";
      } else if (perksList.length > 0 && perksList[0]) {
        // Fallback para perk apenas se NENHUM item existir
        displayIcon = perksList[0].icon || perksList[0].image || null;
        displayName = perksList[0].name || "Survivor";
      }
    } else {
      displayIcon = build.character ? (build.character.icon || build.character.image || build.character.portrait) : null;
      displayName = build.character ? build.character.name : "Killer";
    }

    // 2. HTML do Item no centro
    const itemHTML = (isSurvivor && resolvedItem && (resolvedItem.icon || resolvedItem.image)) ? `
      <div style="width: 42px; height: 42px; background: #0a0a0a; border-radius: 6px; border: 1px solid #ff9900; display: flex; align-items: center; justify-content: center; overflow: hidden; flex-shrink: 0;" title="Item: ${resolvedItem.name || ''}">
        <img src="${resolvedItem.icon || resolvedItem.image}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
    ` : '';

    const perksHTML = perksList.map(p => {
      if (p && (p.icon || p.image)) {
        return `<img src="${p.icon || p.image}" alt="${p.name || ''}" title="${p.name || ''}" style="width: 36px; height: 36px; object-fit: contain; border-radius: 4px;">`;
      }
      return `<div style="width: 36px; height: 36px; border: 1px dashed #444; border-radius: 4px; background: #111;"></div>`;
    }).join('');

    return `
      <div onclick="loadBuild('${build.id}')" style="background: #181818; padding: 14px 20px; border-radius: 8px; border: 1px solid ${build.isPreset ? '#ff9900' : '#2a2a2a'}; margin-bottom: 12px; display: flex; align-items: center; justify-content: space-between; gap: 15px; width: 100%; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.borderColor='#ff3333'" onmouseout="this.style.borderColor='${build.isPreset ? '#ff9900' : '#2a2a2a'}'">
        
        <div style="display: flex; align-items: center; gap: 14px; min-width: 220px;">
          <div style="width: 48px; height: 48px; background: #111; border-radius: 6px; border: 1px solid #333; display: flex; align-items: center; justify-content: center; overflow: hidden; flex-shrink: 0;">
            ${displayIcon ? 
              `<img src="${displayIcon}" alt="${displayName}" style="width: 100%; height: 100%; object-fit: cover;">` : 
              `<div style="width: 100%; height: 100%; background: #1a1a1a; display: flex; align-items: center; justify-content: center; color: #555; font-size: 0.8em;">No Img</div>`
            }
          </div>
          <div>
            <h3 style="color: #fff; margin: 0 0 4px 0; font-size: 1.05em; font-weight: 600;">
              ${build.name} ${build.isPreset ? '<span style="font-size:0.65em; background:#ff9900; color:#000; padding:2px 6px; border-radius:4px; margin-left:6px; font-weight:bold;">PRE-MADE</span>' : ''}
            </h3>
            <span style="color: #666; font-size: 0.8em;">Created in: ${build.date || 'Recent'}</span>
          </div>
        </div>

        <div style="display: flex; gap: 8px; align-items: center; justify-content: center; min-width: 200px;">
  ${itemHTML}
  ${perksHTML}
</div>

        <div style="min-width: 80px; text-align: right;">
          ${!build.isPreset ? 
            `<button onclick="event.stopPropagation(); deleteBuild('${build.id}')" style="background: #ff3333; color: white; border: none; padding: 8px 14px; border-radius: 4px; cursor: pointer; font-weight: bold; font-size: 0.85em;">Delete</button>` : 
            `<span style="color:#ff9900; font-size:0.8em; font-weight:bold;">Official</span>`
          }
        </div>

      </div>
    `;
  }).join('');
}

// --- RENDERIZAR ESTRUTURA DOS SLOTS NO EDITOR ---
function renderBuilderLayout() {
  const container = document.getElementById("builder-container");
  if (!container) return;

  const isKiller = (currentRole || "killer").toLowerCase() === "killer";

  // HTML do slot principal (Killer ou Item) - Ligado às tuas funções originais corretas
  let mainSlotHTML = "";
  if (isKiller) {
    mainSlotHTML = `
      <div style="text-align: center;">
        <span style="color: #888; font-size: 0.8em; display: block; margin-bottom: 8px;">KILLER</span>
        <div onclick="selectKillerPrompt()" style="width: 100px; height: 100px; background: #111; border: 2px dashed #444; border-radius: 8px; display: flex; align-items: center; justify-content: center; cursor: pointer; overflow: hidden; position: relative;">
          ${selectedKiller ? 
            `<img src="${selectedKiller.icon || selectedKiller.image}" style="width: 100%; height: 100%; object-fit: cover;">` : 
            `<span style="color: #ff3333; font-size: 2em;">+</span>`
          }
        </div>
      </div>
    `;
  } else {
    mainSlotHTML = `
      <div style="text-align: center;">
        <span style="color: #888; font-size: 0.8em; display: block; margin-bottom: 8px;">ITEM</span>
        <div onclick="openItemModal()" style="width: 100px; height: 100px; background: #111; border: 2px dashed #444; border-radius: 8px; display: flex; align-items: center; justify-content: center; cursor: pointer; overflow: hidden; position: relative;">
          ${selectedItem ? 
            `<img src="${(typeof selectedItem === 'object' ? selectedItem.icon || selectedItem.image : getItem(selectedItem)?.icon)}" style="width: 100%; height: 100%; object-fit: cover;">` : 
            `<span style="color: #ff3333; font-size: 2em;">+</span>`
          }
        </div>
      </div>
    `;
  }

  // HTML das 3 Perks - Ligado às funções corretas de Killer e Survivor
  const perksList = isKiller ? equippedPerks : equippedSurvivorPerks;
  const perksHTML = `
    <div style="text-align: center;">
      <span style="color: #888; font-size: 0.8em; display: block; margin-bottom: 8px;">PERKS</span>
      <div style="display: flex; gap: 10px;">
        ${[0, 1, 2].map(index => {
          const perk = perksList[index];
          const perkObj = typeof perk === 'string' ? getPerk(perk) : perk;
          
          // Define a função de clique consoante seja Killer ou Survivor
          const perkClickAction = isKiller ? `openPerkModal(${index})` : `openSurvivorPerkModal(${index})`;

          return `
            <div onclick="${perkClickAction}" style="width: 60px; height: 60px; background: #111; border: 1px solid #333; border-radius: 6px; display: flex; align-items: center; justify-content: center; cursor: pointer; overflow: hidden;">
              ${perkObj ? 
                `<img src="${perkObj.icon || perkObj.image}" style="width: 100%; height: 100%; object-fit: contain;">` : 
                `<span style="color: #555;">+</span>`
              }
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;

  // Renderiza no container
  container.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: center; gap: 40px; background: #181818; padding: 25px; border-radius: 8px; border: 1px solid #2a2a2a; margin-top: 10px;">
      ${mainSlotHTML}
      ${perksHTML}
    </div>
  `;
}

// --- REMOÇÕES ---
function removeKiller(e) { if (e) e.stopPropagation(); selectedKiller = null; renderBuilderLayout(); updateDetailsPanel(); }
function removePerk(i, e) { if (e) e.stopPropagation(); equippedPerks[i] = null; renderBuilderLayout(); updateDetailsPanel(); }
function removeItem(e) { if (e) e.stopPropagation(); selectedItem = null; renderBuilderLayout(); updateDetailsPanel(); }
function removeSurvivorPerk(i, e) { if (e) e.stopPropagation(); equippedSurvivorPerks[i] = null; renderBuilderLayout(); updateDetailsPanel(); }

// --- MODAL DE SELEÇÃO & FILTROS ---
function selectKillerPrompt() {
  currentEditingSlot = null;
  openModal("Choose Killer");
  renderModalList(killersData, 'killer');
}

function openPerkModal(i) {
  currentEditingSlot = i;
  openModal("Choose Killer Perk");
  renderModalList(perksData, 'perk-killer');
}

function openItemModal() {
  openModal("Escolher Item");
  renderModalList(survivorItemsData, 'item');
}

function openSurvivorPerkModal(index) {
  currentEditingSlot = index;
  openModal("Escolher Vantagem de Sobrevivente");
  renderModalList(survivorPerksData, "SurvivorPerk");
}

function openModal(title) {
  document.getElementById("modal-title").innerText = title;
  document.getElementById("search-input").value = "";
  document.getElementById("selection-modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("selection-modal").style.display = "none";
}

let activeModalList = [];
let activeModalType = "";

function renderModalList(list, type) {
  activeModalList = list;
  activeModalType = type;
  filterModalItems();
}

function filterModalItems() {
  const query = document.getElementById("search-input").value.toLowerCase();
  const filtered = activeModalList.filter(item => item.name.toLowerCase().includes(query));
  const grid = document.getElementById("modal-items-grid");

  if (!grid) return;

  grid.innerHTML = filtered.map(item => {
    let clickFn = "";
    if (activeModalType === 'killer') clickFn = `selectKiller('${item.id}')`;
    if (activeModalType === 'perk-killer') clickFn = `selectPerk('${item.id}')`;
    if (activeModalType === 'item') clickFn = `selectItem('${item.id}')`;
    if (activeModalType === 'perk-survivor' || activeModalType === 'SurvivorPerk') clickFn = `selectSurvivorPerk('${item.id}')`;

    let badgeHTML = "";
    if (activeModalType === 'perk-killer' || activeModalType === 'perk-survivor' || activeModalType === 'SurvivorPerk') {
      badgeHTML = item.price 
        ? `<span class="perk-badge coin-price"><img src="${item.priceIcon || EMBLEM_ICON}" class="currency-icon"> ${item.price}</span>`
        : `<span class="perk-badge killer-level">${item.type}</span>`;
    }

    const safeDesc = (item.description || "Sem descrição disponível.")
      .replace(/'/g, "\\'")
      .replace(/"/g, '&quot;');

    return `
      <div class="modal-card" 
           onclick="${clickFn}"
           onmousemove="showTooltip(event, '${item.name.replace(/'/g, "\\'")}', '${safeDesc}')"
           onmouseleave="hideTooltip()">
        <img src="${item.icon || item.image}" style="width:36px; height:36px; object-fit:contain;">
        <strong>${item.name}</strong>
        ${badgeHTML}
      </div>
    `;
  }).join('');
}

function showTooltip(e, name, description) {
  const tooltip = document.getElementById("item-tooltip");
  const titleEl = document.getElementById("tooltip-title");
  const descEl = document.getElementById("tooltip-desc");

  if (!tooltip) return;

  titleEl.textContent = name;
  descEl.textContent = description;

  let x = e.clientX + 15;
  let y = e.clientY + 15;

  if (x + 290 > window.innerWidth) x = e.clientX - 290;
  if (y + 150 > window.innerHeight) y = e.clientY - 150;

  tooltip.style.left = x + "px";
  tooltip.style.top = y + "px";
  tooltip.classList.remove("hidden");
}

function hideTooltip() {
  const tooltip = document.getElementById("item-tooltip");
  if (tooltip) {
    tooltip.classList.add("hidden");
  }
}

function selectKiller(id) { 
  selectedKiller = killersData.find(k => k.id === id); 
  closeModal(); 
  renderBuilderLayout(); 
  updateDetailsPanel(); 
}

function selectPerk(id) { 
  const perkObj = perksData.find(p => p.id === id);
  if (currentEditingSlot !== null && currentEditingSlot >= 0) {
    equippedPerks[currentEditingSlot] = perkObj;
  } else {
    const emptyIndex = equippedPerks.findIndex(p => p === null);
    if (emptyIndex !== -1) equippedPerks[emptyIndex] = perkObj;
    else equippedPerks[0] = perkObj;
  }
  closeModal(); 
  renderBuilderLayout(); 
  updateDetailsPanel(); 
}

function selectSurvivorPerk(id) {
  const perkObj = survivorPerksData.find(p => p.id === id);
  if (currentEditingSlot !== null && currentEditingSlot >= 0) {
    equippedSurvivorPerks[currentEditingSlot] = perkObj;
  } else {
    const emptyIndex = equippedSurvivorPerks.findIndex(p => p === null);
    if (emptyIndex !== -1) equippedSurvivorPerks[emptyIndex] = perkObj;
    else equippedSurvivorPerks[0] = perkObj;
  }
  closeModal();
  renderBuilderLayout();
  updateDetailsPanel();
}

function selectItem(itemInput) {
  // Preserva o nome introduzido no input atual
  const nameInput = document.getElementById("build-name-input");
  const currentTypedName = nameInput ? nameInput.value : "";

  // Garante que o item é tratado como objeto quer venha por ID quer por objeto direto
  let itemObj = itemInput;
  if (typeof itemInput === 'string') {
    itemObj = survivorItemsData.find(i => String(i.id).toLowerCase() === String(itemInput).toLowerCase() || String(i.name).toLowerCase() === String(itemInput).toLowerCase()) || { name: itemInput, icon: "", description: "Sem descrição." };
  }

  selectedItem = itemObj;
  closeModal();
  renderBuilderLayout();
  updateDetailsPanel();

  // Restaura o nome no input
  const newNameInput = document.getElementById("build-name-input");
  if (newNameInput) newNameInput.value = currentTypedName;
}


// --- PAINEL DE DETALHES ---
function updateDetailsPanel() {
  const panel = document.getElementById("details-panel");
  if (!panel) return;

  const isKiller = (currentRole || "killer").toLowerCase() === "killer";

  if (isKiller) {
    const killer = selectedKiller;
    const perks = equippedPerks || [null, null, null];

    let html = `<h3>Killer Build</h3>`;
    if (killer) {
      // Cabeçalho do Killer
      html += `
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 15px;">
          <img src="${killer.icon || killer.image || ''}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 6px; border: 1px solid #333;">
          <div>
            <h4 style="margin: 0; color: #fff;">${killer.name}</h4>
            <p style="margin: 4px 0 0 0; color: #aaa; font-size: 0.85em;">${killer.description || ''}</p>
          </div>
        </div>
      `;

      // Estatísticas (Stats)
      if (killer.stats) {
        html += `
          <div style="margin-bottom: 15px; font-size: 0.85em; color: #ccc; background: #141414; padding: 8px 12px; border-radius: 6px; border: 1px solid #222;">
            ${killer.stats.moveSpeedBase ? `<div style="margin-bottom: 4px;"><strong>Base Speed:</strong> ${killer.stats.moveSpeedBase}</div>` : ''}
            ${killer.stats.moveSpeedPursuit ? `<div style="margin-bottom: 4px;"><strong>Pursuit Speed:</strong> ${killer.stats.moveSpeedPursuit}</div>` : ''}
            ${killer.stats.intentRadius ? `<div><strong>Intent Radius:</strong> ${killer.stats.intentRadius}</div>` : ''}
          </div>
        `;
      }

      // Habilities and Passives (Skills)
      if (killer.skills && killer.skills.length > 0) {
        html += `<h4 style="color: #ff3333; margin-top: 15px; font-size: 0.9em; text-transform: uppercase;">Habilities & Powers</h4>`;
        
        killer.skills.forEach(skill => {
          html += `
            <div style="background: #141414; padding: 12px; border-radius: 6px; margin-bottom: 12px; border-left: 3px solid #ff3333; border: 1px solid #222;">
              <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
                ${skill.icon ? `<img src="${skill.icon}" style="width: 24px; height: 24px; object-fit: contain;">` : ''}
                <strong style="color: #fff; font-size: 0.9em;">${skill.name}</strong>
              </div>
              <p style="margin: 0 0 8px 0; color: #aaa; font-size: 0.8em; line-height: 1.4;">${skill.description}</p>
          `;

          if (skill.effects && skill.effects.length > 0) {
            html += `<ul style="margin: 0; padding-left: 18px; color: #888; font-size: 0.75em;">`;
            skill.effects.forEach(effect => {
              html += `<li style="margin-bottom: 2px;">${effect}</li>`;
            });
            html += `</ul>`;
          }

          html += `</div>`;
        });
      }

      // Máscaras (Específico do The Masked)
      if (killer.masks && killer.masks.length > 0) {
        html += `<h4 style="color: #ff3333; margin-top: 15px; font-size: 0.9em; text-transform: uppercase;">Available Masks</h4>`;
        
        killer.masks.forEach(mask => {
          html += `
            <div style="background: #141414; padding: 10px; border-radius: 6px; margin-bottom: 8px; border-left: 3px solid #ff9900; border: 1px solid #222; display: flex; align-items: center; gap: 10px;">
              ${mask.icon ? `<img src="${mask.icon}" style="width: 28px; height: 28px; object-fit: contain;">` : ''}
              <div>
                <strong style="color: #fff; font-size: 0.85em;">${mask.name}</strong>
                <p style="margin: 2px 0 0 0; color: #aaa; font-size: 0.75em; line-height: 1.3;">${mask.effect}</p>
              </div>
            </div>
          `;
        });
      }

    } else {
      html += `<p style="color: #888;">No killer selected.</p>`;
    }

    // Perks Equipadas do Killer
    html += `<h4 style="color: #ff3333; margin-top: 15px;">KILLER PERKS EQUIPPED (${perks.filter(Boolean).length}/3)</h4>`;
    perks.forEach(p => {
      const perkObj = typeof p === 'string' ? getPerk(p) : p;
      if (perkObj) {
        html += `
          <div style="display: flex; align-items: center; gap: 10px; margin-top: 8px; background: #141414; padding: 8px; border-radius: 4px; border-left: 3px solid #ff3333;">
            <img src="${perkObj.icon || perkObj.image || ''}" style="width: 32px; height: 36px; object-fit: contain;">
            <div>
              <strong style="color: #fff;">${perkObj.name}</strong>
              <p style="margin: 2px 0 0 0; color: #888; font-size: 0.8em;">${perkObj.description || ''}</p>
            </div>
          </div>
        `;
      }
    });

    panel.innerHTML = html;

  } else {
    // --- LÓGICA DE SURVIVOR ---
    let itemObj = selectedItem;
    if (typeof selectedItem === 'string') {
      itemObj = getItem(selectedItem);
    }

    const perks = equippedSurvivorPerks || [null, null, null];

    let html = `<h3 style="color: #ff3333; margin-bottom: 10px;">Survivor Build</h3>`;

    if (itemObj && (itemObj.name || itemObj.icon || itemObj.image)) {
      html += `
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px; background: #141414; padding: 10px; border-radius: 6px; border: 1px solid #222;">
          <img src="${itemObj.icon || itemObj.image || ''}" style="width: 42px; height: 42px; object-fit: cover; border-radius: 4px; border: 1px solid #ff9900;">
          <div>
            <strong style="color: #fff; font-size: 0.95em;">Item Equipado: ${itemObj.name || 'Item'}</strong>
            <p style="margin: 2px 0 0 0; color: #888; font-size: 0.8em;">${itemObj.description || ''}</p>
          </div>
        </div>
      `;
    } else {
      html += `<p style="color: #888; font-style: italic; margin-bottom: 15px;">No item equipped.</p>`;
    }

    html += `<h4 style="color: #ff3333; margin-top: 15px; font-size: 0.9em; text-transform: uppercase;">Survivor Perks Equipped (${perks.filter(Boolean).length}/3)</h4>`;
    
    perks.forEach(p => {
      const perkObj = typeof p === 'string' ? getPerk(p) : p;
      if (perkObj) {
        html += `
          <div style="display: flex; align-items: center; gap: 12px; margin-top: 8px; background: #141414; padding: 10px; border-radius: 6px; border-left: 3px solid #ff3333;">
            <img src="${perkObj.icon || perkObj.image || ''}" style="width: 32px; height: 36px; object-fit: contain;">
            <div>
              <strong style="color: #fff; font-size: 0.9em;">${perkObj.name}</strong>
              <p style="margin: 2px 0 0 0; color: #aaa; font-size: 0.8em;">${perkObj.description || ''}</p>
            </div>
          </div>
        `;
      }
    });

    panel.innerHTML = html;
  }
}

// --- INICIALIZAÇÃO DA APLICAÇÃO ---
document.addEventListener("DOMContentLoaded", () => {
  renderSavedBuildsList();

  const searchInput = document.getElementById("search-builds") || document.querySelector('input[placeholder*="Search"]');
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      renderSavedBuildsList();
    });
  }
});
