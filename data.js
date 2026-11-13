// Len's Island weapon & tool reference data.
// Source: techraptor.net/gaming/guides/lens-island-weapon-guide (byline: Robert N Adams, published 2021-11-29).
// Re-fetched 2026-11-13 via web.archive.org/web/2025/<url> (direct curl returned HTTP 403);
// Wayback snapshot timestamp 20250524212919 (2025-05-24). The article is marked as a living guide and
// may have been edited after this snapshot was taken; numbers below are exactly as this snapshot showed them.
// No second non-Fandom source with comparable weapon/tool stat tables was found (checked magicgameworld.com,
// whose beginner-guide URL from search results 404s; see README for the search attempt).
// No numbers invented; blanks shown as "not published".
// lens-island.fandom.com was NOT crawled (off limits per charter).

const SOURCE_TECHRAPTOR = "https://techraptor.net/gaming/guides/lens-island-weapon-guide";
const SOURCE_SNAPSHOT_DATE = "2025-05-24";
const SOURCE_SNAPSHOT_URL = "https://web.archive.org/web/20250524212919/https://techraptor.net/gaming/guides/lens-island-weapon-guide";

const ITEMS = [
  {
    "set": "Iron",
    "name": "Bowie Knife",
    "type": "Dagger",
    "stats": {
      "Damage": "Low",
      "Speed": "High",
      "Critical Hits": "Low",
      "Knockback": "Low",
      "Piercing Damage": "40%",
      "Slashing Damage": "100%",
      "Blunt Damage": "30%",
      "Woodcutting": "0%",
      "Mining": "0%",
      "Harvesting": "0%"
    },
    "special": null,
    "requirements": "Equipped by default when you start the game.",
    "craftingCost": [
      "N/A"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Iron",
    "name": "Iron Hatchet",
    "type": "Axe",
    "stats": {
      "Damage": "Average",
      "Speed": "Low",
      "Critical Hits": "Low",
      "Resource Bonus": "5%",
      "Piercing Damage": "20%",
      "Slashing Damage": "50%",
      "Blunt Damage": "20%",
      "Woodcutting": "100%",
      "Mining": "0%",
      "Harvesting": "0%"
    },
    "special": null,
    "requirements": "Equipped by default when you start the game.",
    "craftingCost": [
      "N/A"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Iron",
    "name": "Iron Pickaxe",
    "type": "Pickaxe",
    "stats": {
      "Damage": "Average",
      "Speed": "Low",
      "Critical Hits": "Average",
      "Crit Resource Bonus": "10%",
      "Piercing Damage": "10%",
      "Slashing Damage": "10%",
      "Blunt Damage": "30%",
      "Woodcutting": "0%",
      "Mining": "100%",
      "Harvesting": "0%"
    },
    "special": null,
    "requirements": "Equipped by default when you start the game.",
    "craftingCost": [
      "N/A"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Iron",
    "name": "Iron Axe",
    "type": "Axe",
    "stats": {
      "Damage": "Average",
      "Speed": "Average",
      "Critical Hits": "Average",
      "Crit Resource Bonus": "15%",
      "Piercing Damage": "20%",
      "Slashing Damage": "50%",
      "Blunt Damage": "20%",
      "Woodcutting": "100%",
      "Mining": "0%",
      "Harvesting": "0%"
    },
    "special": null,
    "requirements": "Crafted at Level 1 Work Bench.",
    "craftingCost": [
      "10 Wood",
      "10 Fibers",
      "8 Iron Shards"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Iron",
    "name": "Iron Sword",
    "type": "Sword",
    "stats": {
      "Damage": "Average",
      "Speed": "High",
      "Critical Hits": "Average",
      "Knockback": "Average",
      "Piercing Damage": "50%",
      "Slashing Damage": "100%",
      "Blunt Damage": "50%",
      "Woodcutting": "0%",
      "Mining": "0%",
      "Harvesting": "0%"
    },
    "special": [
      "Spinning Strike"
    ],
    "requirements": "Crafted at Level 1 Work Bench.",
    "craftingCost": [
      "10 Wood",
      "10 Fibers",
      "12 Iron Shards"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Iron",
    "name": "Iron Shield",
    "type": "Shield",
    "stats": {
      "Passive Blocking": "15%",
      "Active Blocking": "60%",
      "Speed Modifier": "0.95x"
    },
    "special": [
      "Block"
    ],
    "requirements": "Crafted at Level 1 Work Bench.",
    "craftingCost": [
      "30 Wood",
      "10 Fibers",
      "10 Iron Shards"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Iron",
    "name": "Iron Spear",
    "type": "Spear",
    "stats": {
      "Damage": "Average",
      "Speed": "Average",
      "Critical Hits": "Average",
      "Knockback": "Average",
      "Piercing Damage": "100%",
      "Slashing Damage": "50%",
      "Blunt Damage": "30%",
      "Woodcutting": "0%",
      "Mining": "0%",
      "Harvesting": "0%"
    },
    "special": [
      "Thrust"
    ],
    "requirements": "Crafted at Level 1 Work Bench.",
    "craftingCost": [
      "30 Wood",
      "10 Fibers",
      "10 Iron Shards"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Iron",
    "name": "Iron Battle Axe",
    "type": "Battle Axe",
    "stats": {
      "Damage": "High",
      "Speed": "Low",
      "Critical Hits": "Average",
      "Knockback": "Average",
      "Piercing Damage": "80%",
      "Slashing Damage": "80%",
      "Blunt Damage": "80%",
      "Woodcutting": "40%",
      "Mining": "0%",
      "Harvesting": "0%"
    },
    "special": null,
    "requirements": "Crafted at Level 1 Work Bench.",
    "craftingCost": [
      "20 Wood",
      "10 Fibers",
      "15 Iron Shards"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Iron",
    "name": "Iron Hammer",
    "type": "Hammer",
    "stats": {
      "Damage": "High",
      "Speed": "Low",
      "Critical Hits": "Average",
      "Knockback": "Average",
      "Piercing Damage": "50%",
      "Slashing Damage": "50%",
      "Blunt Damage": "100%",
      "Woodcutting": "0%",
      "Mining": "50%",
      "Harvesting": "0%"
    },
    "special": [
      "Swing and Smash"
    ],
    "requirements": "Crafted at Level 1 Work Bench.",
    "craftingCost": [
      "20 Wood",
      "10 Fibers",
      "20 Iron Shards"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Iron",
    "name": "Iron Scythe",
    "type": "Scythe",
    "stats": {
      "Damage": "High",
      "Speed": "Average",
      "Critical Hits": "Average",
      "Piercing Damage": "40%",
      "Slashing Damage": "40%",
      "Blunt Damage": "10%",
      "Woodcutting": "0%",
      "Mining": "0%",
      "Harvesting": "100%"
    },
    "special": [
      "Forward Strike",
      "Backhand Strike",
      "Spinning Strike"
    ],
    "requirements": "Crafted at Level 1 Work Bench.",
    "craftingCost": [
      "30 Wood",
      "10 Fibers",
      "10 Iron Shards"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Iron",
    "name": "Len's Island Iron Weapon Set Bonus Item - Woodsman's Wood Wrecker",
    "type": "Bonus Weapon",
    "stats": {
      "Damage": "Very High",
      "Speed": "Very Low",
      "Critical Hits": "High",
      "Knockback": "High",
      "Piercing Damage": "70%",
      "Slashing Damage": "70%",
      "Blunt Damage": "70%",
      "Woodcutting": "70%",
      "Mining": "0%",
      "Harvesting": "0%"
    },
    "special": [
      "Spinning Strike",
      "Swing and Strike"
    ],
    "requirements": "Crafted at Work Bench on the Item Collections tab after all other weapons and tools in the group have been crafted.",
    "craftingCost": [
      "30 Wood",
      "15 Fibers",
      "200 Iron Shards"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Steel",
    "name": "Brutal Blade (Steel Sword)",
    "type": "Sword",
    "stats": {
      "Damage": "Average",
      "Speed": "High",
      "Critical Hits": "Average",
      "Knockback": "Average",
      "Piercing Damage": "50%",
      "Slashing Damage": "100%",
      "Blunt Damage": "50%",
      "Woodcutting": "0%",
      "Mining": "0%",
      "Harvesting": "0%"
    },
    "special": [
      "Jumping Strike"
    ],
    "requirements": "Crafted at Level 2 Work Bench.",
    "craftingCost": [
      "10 Wood",
      "30 Fibers",
      "8 Rose",
      "60 Iron Shards"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Steel",
    "name": "Steel Axe",
    "type": "Axe",
    "stats": {
      "Damage": "High",
      "Speed": "Average",
      "Critical Hits": "High",
      "Crit Resource Bonus": "20%",
      "Piercing Damage": "20%",
      "Slashing Damage": "50%",
      "Blunt Damage": "20%",
      "Woodcutting": "100%",
      "Mining": "0%",
      "Harvesting": "0%"
    },
    "special": [
      "Underhand Strike"
    ],
    "requirements": "Crafted at Level 2 Work Bench.",
    "craftingCost": [
      "15 Wood",
      "15 Fibers",
      "8 Rose",
      "75 Iron Shards"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Steel",
    "name": "Steel Battle Axe",
    "type": "Battle Axe",
    "stats": {
      "Damage": "High",
      "Speed": "Average",
      "Critical Hits": "High",
      "Knockback": "Average",
      "Piercing Damage": "60%",
      "Slashing Damage": "80%",
      "Blunt Damage": "80%",
      "Woodcutting": "40%",
      "Mining": "0%",
      "Harvesting": "0%"
    },
    "special": [
      "Leaping Strike"
    ],
    "requirements": "Crafted at Level 2 Work Bench.",
    "craftingCost": [
      "15 Wood",
      "15 Fibers",
      "8 Rose",
      "75 Iron Shards"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Steel",
    "name": "Miner's Pick (Steel Pickaxe)",
    "type": "Pickaxe",
    "stats": {
      "Damage": "High",
      "Speed": "Average",
      "Critical Hits": "Average",
      "Crit Resource Bonus": "20%",
      "Piercing Damage": "10%",
      "Slashing Damage": "50%",
      "Blunt Damage": "1`0%",
      "Woodcutting": "0%",
      "Mining": "100%",
      "Harvesting": "0%"
    },
    "special": [
      "Backhand Strike"
    ],
    "requirements": "Crafted at Level 2 Work Bench.",
    "craftingCost": [
      "15 Wood",
      "20 Fibers",
      "8 Rose",
      "70 Iron Shards"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Steel",
    "name": "Reinforced Shield (Steel Shield)",
    "type": "Shield",
    "stats": {
      "Passive Blocking": "30%",
      "Active Blocking": "80%",
      "Speed Modifier": "0.85x"
    },
    "special": [
      "Block"
    ],
    "requirements": "Crafted at Level 2 Work Bench.",
    "craftingCost": [
      "15 Wood",
      "20 Fibers",
      "8 Blue Berries",
      "8 Rose",
      "70 Iron Shards"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Steel",
    "name": "Painful Pike (Steel Spear)",
    "type": "Spear",
    "stats": {
      "Damage": "Average",
      "Speed": "Average",
      "Critical Hits": "Low",
      "Knockback": "High",
      "Piercing Damage": "50%",
      "Slashing Damage": "100%",
      "Blunt Damage": "50%",
      "Woodcutting": "0%",
      "Mining": "0%",
      "Harvesting": "0%"
    },
    "special": [
      "Thrust",
      "Backhand Strike"
    ],
    "requirements": "Crafted at Level 2 Work Bench.",
    "craftingCost": [
      "10 Wood",
      "30 Fibers",
      "10 Rose",
      "60 Iron Shards"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Steel",
    "name": "Len's Island Steel Weapon Set Bonus Item - The Claymore",
    "type": "Bonus Weapon",
    "stats": {
      "Damage": "100%",
      "Speed": "Average",
      "Critical Hits": "High",
      "Knockback": "High",
      "Piercing Damage": "60%",
      "Slashing Damage": "1200%",
      "Blunt Damage": "60%",
      "Woodcutting": "0%",
      "Mining": "0%",
      "???": "100%"
    },
    "special": [
      "Backhand Strike"
    ],
    "requirements": "Crafted at Work Bench on the Item Collections tab after all other weapons and tools in the group have been crafted.",
    "craftingCost": [
      "10 Wood",
      "30 Fibers",
      "10 Rose",
      "60 Iron Shards"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Knight",
    "name": "Golden Gladius (Knight Sword)",
    "type": "Sword",
    "stats": {
      "Damage": "High",
      "Speed": "Average",
      "Critical Hits": "High",
      "Knockback": "Average",
      "Piercing Damage": "50%",
      "Slashing Damage": "100%",
      "Blunt Damage": "50%",
      "Woodcutting": "0%",
      "Mining": "0%",
      "Harvesting": "0%"
    },
    "special": [
      "Backhand Strike"
    ],
    "requirements": "Crafted at Level 3 Work Bench.",
    "craftingCost": [
      "10 Wood",
      "30 Fibers",
      "20 Rose",
      "110 Iron Shards",
      "30 COins"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Knight",
    "name": "Golden Mandrill (Knight Pickaxe)",
    "type": "Pickaxe",
    "stats": {
      "Damage": "Average",
      "Speed": "Average",
      "Critical Hits": "High",
      "Crit Resource Bonus": "50%",
      "Piercing Damage": "10%",
      "Slashing Damage": "50%",
      "Blunt Damage": "10%",
      "Woodcutting": "0%",
      "Mining": "100%",
      "Harvesting": "0%"
    },
    "special": [
      "Overhead Strike"
    ],
    "requirements": "Crafted at Level 3 Work Bench.",
    "craftingCost": [
      "25 Wood",
      "10 Rose",
      "100 Iron Shards",
      "40 Coins"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Knight",
    "name": "Golden Lanza (Knight Spear)",
    "type": "Spear",
    "stats": {
      "Damage": "Average",
      "Speed": "High",
      "Critical Hits": "Average",
      "Knockback": "Low",
      "Piercing Damage": "100%",
      "Slashing Damage": "70%",
      "Blunt Damage": "50%",
      "Woodcutting": "0%",
      "Mining": "0%",
      "Harvesting": "0%"
    },
    "special": [
      "Thrust"
    ],
    "requirements": "Crafted at Level 3 Work Bench.",
    "craftingCost": [
      "25 Wood",
      "10 Fibers",
      "10 Rose",
      "120 Iron Shards",
      "45 Coins"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Knight",
    "name": "Golden Forseti (Knight Battle Axe)",
    "type": "Battle Axe",
    "stats": {
      "Damage": "High",
      "Speed": "Average",
      "Critical Hits": "High",
      "Knockback": "High",
      "Piercing Damage": "80%",
      "Slashing Damage": "80%",
      "Blunt Damage": "80%",
      "Woodcutting": "50%",
      "Mining": "0%",
      "Harvesting": "0%"
    },
    "special": [
      "Overhead Strike",
      "Leaping Strike"
    ],
    "requirements": "Crafted at Level 3 Work Bench.",
    "craftingCost": [
      "25 Wood",
      "10 Fibers",
      "10 Rose",
      "110 Iron Shards",
      "30 Coins"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Knight",
    "name": "Golden Hamarr (Knight Hammer)",
    "type": "Hammer",
    "stats": {
      "Damage": "High",
      "Speed": "Average",
      "Critical Hits": "High",
      "Knockback": "High",
      "Piercing Damage": "50%",
      "Slashing Damage": "50%",
      "Blunt Damage": "100%",
      "Woodcutting": "0%",
      "Mining": "50%",
      "Harvesting": "0%"
    },
    "special": [
      "Swing and Strike"
    ],
    "requirements": "Crafted at Level 3 Work Bench.",
    "craftingCost": [
      "25 Wood",
      "10 Fibers",
      "10 Rose",
      "140 Iron Shards",
      "45 Coins"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Knight",
    "name": "Golden Ward (Knight Shield)",
    "type": "Shield",
    "stats": {
      "Passive Blocking": "20%",
      "Active Blocking": "100%",
      "Speed Modifier": "0..9x"
    },
    "special": [
      "Block"
    ],
    "requirements": "Crafted at Level 3 Work Bench.",
    "craftingCost": [
      "25 Wood",
      "10 Rose",
      "130 Iron Shards",
      "55 Coins"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Knight",
    "name": "Len's Island Knight Weapon Set Bonus Item - Golden Saxon",
    "type": "Bonus Weapon",
    "stats": {
      "Damage": "Average",
      "Speed": "Average",
      "Critical Hits": "Average",
      "Crit Resource Bonus": "100%",
      "Piercing Damage": "30%",
      "Slashing Damage": "50%",
      "Blunt Damage": "30%",
      "Woodcutting": "100%",
      "Mining": "0%",
      "Harvesting": "0%"
    },
    "special": [
      "Overhead Strike"
    ],
    "requirements": "Crafted at Work Bench on the Item Collections tab after all other weapons and tools in the group have been crafted.",
    "craftingCost": [
      "25 Wood",
      "10 Fibers",
      "10 Rose",
      "120 Iron Shards",
      "55 Coins"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Pirate",
    "name": "Chop-argh (Pirate Axe)",
    "type": "Axe",
    "stats": {
      "Damage": "Average",
      "Speed": "High",
      "Critical Hits": "Low",
      "Crit Resource Bonus": "30%",
      "Piercing Damage": "10%",
      "Slashing Damage": "50%",
      "Blunt Damage": "10%",
      "Woodcutting": "100%",
      "Mining": "0%",
      "Harvesting": "0%"
    },
    "special": [
      "Backhand Strike"
    ],
    "requirements": "One of the first items available to purchase from Lucky Jack on Pirate's Island in the southern part of Bridgewater.",
    "craftingCost": [
      "85 Coins"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Pirate",
    "name": "Sabe-argh (Pirate Sword)",
    "type": "Sword",
    "stats": {
      "Damage": "High",
      "Speed": "Average",
      "Critical Hits": "High",
      "Knockback": "Low",
      "Piercing Damage": "50%",
      "Slashing Damage": "100%",
      "Blunt Damage": "50%",
      "Woodcutting": "0%",
      "Mining": "0%",
      "Harvesting": "0%"
    },
    "special": [
      "Charging Backhand Strike"
    ],
    "requirements": "One of the first items available to purchase from Lucky Jack on Pirate's Island in the southern part of Bridgewater.",
    "craftingCost": [
      "80 Coins"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Pirate",
    "name": "Boarding Axe (Pirate Battle Axe)",
    "type": "Battle Axe",
    "stats": {
      "Damage": "High",
      "Speed": "Average",
      "Critical Hits": "Average",
      "Knockback": "Low",
      "Piercing Damage": "10%",
      "Slashing Damage": "50%",
      "Blunt Damage": "10%",
      "Woodcutting": "100%",
      "Mining": "0%",
      "Harvesting": "0%"
    },
    "special": [
      "Overhead Strike",
      "Backhand Strike"
    ],
    "requirements": "One of two items purchased from Lucky Jack on Pirate's Island in the southern part of Bridgewater after buying all first wave items and waiting 2 days.",
    "craftingCost": [
      "435 Coins"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Pirate",
    "name": "Corsair Glaive (Pirate Spear)",
    "type": "Spear",
    "stats": {
      "Damage": "Average",
      "Speed": "Average",
      "Critical Hits": "Average",
      "Knockback": "Low",
      "Piercing Damage": "10%",
      "Slashing Damage": "50%",
      "Blunt Damage": "10%",
      "Woodcutting": "0%",
      "Mining": "0%",
      "Harvesting": "0%"
    },
    "special": [
      "Charging Backhand Strike",
      "Triple Strike"
    ],
    "requirements": "One of two items purchased from Lucky Jack on Pirate's Island in the southern part of Bridgewater after buying all first wave items and waiting 2 days.",
    "craftingCost": [
      "320 Coins"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Pirate",
    "name": "Captain's Club (Pirate Hammer)",
    "type": "Hammer",
    "stats": {
      "Damage": "Average",
      "Speed": "Average",
      "Critical Hits": "High",
      "Knockback": "High",
      "Piercing Damage": "10%",
      "Slashing Damage": "50%",
      "Blunt Damage": "10%",
      "Woodcutting": "0%",
      "Mining": "0%",
      "Harvesting": "0%"
    },
    "special": [
      "Swing and Smash",
      "Backhand Strike"
    ],
    "requirements": "The final item purchased from Lucky Jack on Pirate's Island in the southern part of Bridgewater after buying all of the other items and waiting several days.",
    "craftingCost": [
      "550 Coins"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Pirate",
    "name": "Len's Island Pirate Weapon Set Bonus Item - Critical Cutless",
    "type": "Sword",
    "stats": {
      "Damage": "Average",
      "Speed": "High",
      "Critical Hits": "Insane",
      "Knockback": "Low",
      "Piercing Damage": "10%",
      "Slashing Damage": "50%",
      "Blunt Damage": "10%",
      "Woodcutting": "0%",
      "Mining": "0%",
      "Harvesting": "0%"
    },
    "special": [
      "Charging Backhand Strike"
    ],
    "requirements": "Crafted at Work Bench on the Item Collections tab after all other weapons and tools in the group have been crafted.",
    "craftingCost": [
      "300 Coins"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Fisherman",
    "name": "Gone Fishin' (Fisherman Spear)",
    "type": "Spear",
    "stats": {
      "Damage": "Average",
      "Speed": "High",
      "Critical Hits": "Average",
      "Knockback": "Average",
      "Piercing Damage": "100%",
      "Slashing Damage": "50%",
      "Blunt Damage": "50%",
      "Woodcutting": "0%",
      "Mining": "0%",
      "Harvesting": "0%"
    },
    "special": [
      "Charging Backhand Strike"
    ],
    "requirements": "One of two items purchased from Kevin the Fisherman in the southern part of Bridgewater after buying all first wave items and waiting 2 days.",
    "craftingCost": [
      "235 Coins"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Fisherman",
    "name": "Fugu Flail (Fisherman Hammer)",
    "type": "Hammer",
    "stats": {
      "Damage": "High",
      "Speed": "Low",
      "Critical Hits": "Average",
      "Knockback": "High",
      "Piercing Damage": "50%",
      "Slashing Damage": "50%",
      "Blunt Damage": "100%",
      "Woodcutting": "0%",
      "Mining": "40%",
      "Harvesting": "0%"
    },
    "special": [
      "Charging Backhand Strike"
    ],
    "requirements": "One of the first items available to purchase from Kevin the Fisherman in the southern part of Bridgewater.",
    "craftingCost": [
      "130 Coins"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Fisherman",
    "name": "Marlin (Fisherman Sword)",
    "type": "Sword",
    "stats": {
      "Damage": "Average",
      "Speed": "High",
      "Critical Hits": "Low",
      "Knockback": "Average",
      "Piercing Damage": "50%",
      "Slashing Damage": "100%",
      "Blunt Damage": "50%",
      "Woodcutting": "0%",
      "Mining": "0%",
      "Harvesting": "0%"
    },
    "special": [
      "Double Strike",
      "Backhand Slash"
    ],
    "requirements": "Located on The Lonely Island, a small island to the west of The Forgotten Island (the starting island).",
    "craftingCost": [
      "N/A"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Fisherman",
    "name": "Bait-n-Chop (Fisherman Axe)",
    "type": "Axe",
    "stats": {
      "Damage": "Average",
      "Speed": "Average",
      "Critical Hits": "High",
      "Crit Resource Bonus": "10%",
      "Piercing Damage": "50%",
      "Slashing Damage": "50%",
      "Blunt Damage": "50%",
      "Woodcutting": "100%",
      "Mining": "0%",
      "Harvesting": "0%"
    },
    "special": null,
    "requirements": "One of the first items available to purchase from Kevin the Fisherman in the southern part of Bridgewater.",
    "craftingCost": [
      "120 Coins"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Fisherman",
    "name": "Spinner (Fisherman Battle Axe)",
    "type": "Battle Axe",
    "stats": {
      "Damage": "High",
      "Speed": "High",
      "Critical Hits": "Low",
      "Knockback": "Average",
      "Piercing Damage": "80%",
      "Slashing Damage": "80%",
      "Blunt Damage": "80%",
      "Woodcutting": "40%",
      "Mining": "0%",
      "Harvesting": "0%"
    },
    "special": [
      "Overhead Strike",
      "Leaping Strike"
    ],
    "requirements": "One of two items purchased from Kevin the Fisherman in the southern part of Bridgewater after buying all first wave items and waiting 2 days.",
    "craftingCost": [
      "310 Coins"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Fisherman",
    "name": "Wrecked Shield (Fisherman Shield)",
    "type": "Shield",
    "stats": {
      "Passive Blocking": "45%",
      "Active Blocking": "80%",
      "Speed Modifier": "0.75x"
    },
    "special": [
      "Block"
    ],
    "requirements": "The final item purchased from Kevin the Fisherman in the southern part of Bridgewater after buying all other items and waiting several days.",
    "craftingCost": [
      "185 Coins"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Fisherman",
    "name": "Len's Island Fisherman Weapon Set Bonus Item - Angler-Dangler",
    "type": "Bonus Weapon",
    "stats": {
      "Damage": "Very High",
      "Speed": "Low",
      "Critical Hits": "Average",
      "Knockback": "High",
      "Piercing Damage": "50%",
      "Slashing Damage": "50%",
      "Blunt Damage": "100%",
      "Woodcutting": "0%",
      "Mining": "0%",
      "Harvesting": "0%"
    },
    "special": [
      "?"
    ],
    "requirements": "Crafted at Work Bench on the Item Collections tab after all other weapons and tools in the group have been crafted.",
    "craftingCost": [
      "75 Iron Shards",
      "15 Wood",
      "20 Salvaged Metal",
      "20 Light Stone"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Nature",
    "name": "Thorn (Nature Sword)",
    "type": "Sword",
    "stats": {
      "Damage": "Average",
      "Speed": "High",
      "Critical Hits": "Low",
      "Knockback": "Low",
      "Piercing Damage": "50%",
      "Slashing Damage": "100%",
      "Blunt Damage": "50%",
      "Woodcutting": "0%",
      "Mining": "0%",
      "Harvesting": "0%"
    },
    "special": [
      "Overhead Strike"
    ],
    "requirements": "One of the first items available to purchase from Druid Floyd-Radyr in the western part of Bridgewater.",
    "craftingCost": [
      "30 Fibers",
      "25 Marigold",
      "35 Lavender",
      "25 Wood",
      "15 Iron Shards"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Nature",
    "name": "Rock Piercer (Nature Pickaxe)",
    "type": "Pickaxe",
    "stats": {
      "Damage": "Average",
      "Speed": "Low",
      "Critical Hits": "Average",
      "Knockback": "90%",
      "Piercing Damage": "50%",
      "Slashing Damage": "50%",
      "Blunt Damage": "10%",
      "Woodcutting": "0%",
      "Mining": "100%",
      "Harvesting": "0%"
    },
    "special": [
      "Backhand Strike"
    ],
    "requirements": "One of two items purchased from Druid Floyd-Radyr in the western part of Bridgewater after buying all first wave items and waiting 2 days.",
    "craftingCost": [
      "30 Fibers",
      "1 Banana",
      "15 Pumpkin",
      "25 Wood",
      "80 Stone"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Nature",
    "name": "Circle-o-Life (Nature Shield)",
    "type": "Shield",
    "stats": {
      "Passive Blocking": "20%",
      "Active Blocking": "40%",
      "Speed Modifier": "1x"
    },
    "special": [
      "Block"
    ],
    "requirements": "One of the first items available to purchase from Druid Floyd-Radyr in the western part of Bridgewater.",
    "craftingCost": [
      "40 Fibers",
      "1 Marigold",
      "25 Passionfruit",
      "60 Wood"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Nature",
    "name": "Battle-Only-Axe (Nature Battle Axe)",
    "type": "Battle Axe",
    "stats": {
      "Damage": "High",
      "Speed": "Average",
      "Critical Hits": "High",
      "Knockback": "High",
      "Piercing Damage": "85%",
      "Slashing Damage": "85%",
      "Blunt Damage": "85%",
      "Woodcutting": "0%",
      "Mining": "0%",
      "Harvesting": "0%"
    },
    "special": [
      "Charging Backhand Strike"
    ],
    "requirements": "One of two items purchased from Druid Floyd-Radyr in the western part of Bridgewater after buying all first wave items and waiting 2 days.",
    "craftingCost": [
      "20 Fibers",
      "40 Lavender",
      "20 Watermelon",
      "40 Wood",
      "120 Stone"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Nature",
    "name": "Boulder-Smash (Nature Hammer)",
    "type": "Hammer",
    "stats": {
      "Damage": "High",
      "Speed": "Low",
      "Critical Hits": "High",
      "Knockback": "High",
      "Piercing Damage": "50%",
      "Slashing Damage": "50%",
      "Blunt Damage": "10%",
      "Woodcutting": "0%",
      "Mining": "100%",
      "Harvesting": "0%"
    },
    "special": [
      "Overhead Strike",
      "Triple Strike"
    ],
    "requirements": "One of two final items purchased from Druid Floyd-Radyr in the western part of Bridgewater after buying all of the other items and waiting several days.",
    "craftingCost": [
      "50 Fibers",
      "40 Watermelon",
      "1 Marigold",
      "50 Wood",
      "300 Stone"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Nature",
    "name": "Bug's Reach (Nature Scythe)",
    "type": "Scythe",
    "stats": {
      "Damage": "N/A",
      "Speed": "N/A",
      "Critical Hits": "N/A",
      "Knockback": "N/A",
      "Piercing Damage": "50%",
      "Slashing Damage": "50%",
      "Blunt Damage": "10%",
      "Woodcutting": "0%",
      "Mining": "0%",
      "Harvesting": "100%"
    },
    "special": [
      "Forward Strike",
      "Backhand Strike",
      "Spinning Strike"
    ],
    "requirements": "One of two final items purchased from Druid Floyd-Radyr in the western part of Bridgewater after buying all of the other items and waiting several days.",
    "craftingCost": [
      "100 Pumpkin",
      "100 Fibers",
      "100 Stone",
      "100 Wood"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Nature",
    "name": "Len's Island Nature Weapon Set Bonus Item - Banana-On-A-Stick",
    "type": "Bonus Weapon",
    "stats": {
      "Damage": "Low",
      "Speed": "Average",
      "Critical Hits": "Low",
      "Knockback": "Insane",
      "Piercing Damage": "20%",
      "Slashing Damage": "20%",
      "Blunt Damage": "20%",
      "Woodcutting": "0%",
      "Mining": "0%",
      "Harvesting": "0%"
    },
    "special": [
      "Charging Backhand Strike",
      "Backhand Strike",
      "Leaping Strike"
    ],
    "requirements": "Crafted at Work Bench on the Item Collections tab after all other weapons and tools in the group have been crafted.",
    "craftingCost": [
      "1 banana",
      "25 Wood"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Refined",
    "name": "Refined Battleaxe (Refined Battle Axe)",
    "type": "Battle Axe",
    "stats": {
      "Damage": "High",
      "Speed": "Average",
      "Critical Hits": "Low",
      "Knockback": "Average",
      "Piercing Damage": "80%",
      "Slashing Damage": "80%",
      "Blunt Damage": "80%",
      "Woodcutting": "70%",
      "Mining": "0%",
      "Harvesting": "0%"
    },
    "special": [
      "Double Strike",
      "Leaping Strike"
    ],
    "requirements": "The fifth and final item available to be purchased from Jared the Blacksmith. You must purchase the Refined Sword first and wait several days for Jared to restock.",
    "craftingCost": [
      "30 Wood",
      "5 Lavender",
      "150 Iron Shards",
      "150 Dark Essence",
      "5 Light Stone"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Refined",
    "name": "Refined Mace",
    "type": "Hammer",
    "stats": {
      "Damage": "High",
      "Speed": "Low",
      "Critical Hits": "High",
      "Knockback": "High",
      "Piercing Damage": "50%",
      "Slashing Damage": "50%",
      "Blunt Damage": "100%",
      "Woodcutting": "0%",
      "Mining": "50%",
      "Harvesting": "0%"
    },
    "special": [
      "Double Strike",
      "Overhead Jumping Slash"
    ],
    "requirements": "The first item available to be purchased from Jared the Blacksmith.",
    "craftingCost": [
      "15 Wood",
      "5 Lavender",
      "50 Iron Shards",
      "10 Dark Essence",
      "1 Light Stone"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Refined",
    "name": "Dark (Refined Spear)",
    "type": "Spear",
    "stats": {
      "Damage": "Low",
      "Speed": "Average",
      "Critical Hits": "High",
      "Knockback": "Low",
      "Piercing Damage": "100%",
      "Slashing Damage": "75%",
      "Blunt Damage": "30%",
      "Woodcutting": "0%",
      "Mining": "0%",
      "Harvesting": "0%"
    },
    "special": [
      "Triple Strike"
    ],
    "requirements": "The third item available to be purchased from Jared the Blacksmith. You must purchase the Refined Mace first and wait three days for Jared to restock.",
    "craftingCost": [
      "10 Wood",
      "5 Lavender",
      "110 Iron Shards",
      "80 Dark Essence",
      "2 Light Stone"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Refined",
    "name": "Refined Sword",
    "type": "Sword",
    "stats": {
      "Damage": "Average",
      "Speed": "High",
      "Critical Hits": "High",
      "Knockback": "Low",
      "Piercing Damage": "50%",
      "Slashing Damage": "100%",
      "Blunt Damage": "50%",
      "Woodcutting": "0%",
      "Mining": "0%",
      "Harvesting": "0%"
    },
    "special": [
      "Dark Strike - Consumes 1 Dark Essence",
      "Uppercut Strike"
    ],
    "requirements": "The fourth item available to be purchased from Jared the Blacksmith. You must purchase the Refined Spear first and wait several days for Jared to restock.",
    "craftingCost": [
      "10 Wood",
      "5 Lavender",
      "110 Iron Shards",
      "80 Dark Essence",
      "2 Light Stone"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Refined",
    "name": "Refined Shield",
    "type": "Shield",
    "stats": {
      "Passive Blocking": "35%",
      "Active Blocking": "75%",
      "Speed Modifier": "0.9x"
    },
    "special": [
      "Block"
    ],
    "requirements": "The second item available to be purchased from Jared the Blacksmith. You must purchase the Refined Mace first and wait two days for Jared to restock.",
    "craftingCost": [
      "10 Wood",
      "5 Lavender",
      "110 Iron Shards",
      "80 Dark Essence",
      "2 Light Stone"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Refined",
    "name": "Len's Island Refined Weapon Set Bonus Item - Refined Pick",
    "type": "Pickaxe",
    "stats": {
      "Damage": "High",
      "Speed": "Average",
      "Critical Hits": "Very High",
      "Crit Resource Bonus": "75%",
      "Piercing Damage": "80%",
      "Slashing Damage": "80%",
      "Blunt Damage": "50%",
      "Woodcutting": "0%",
      "Mining": "100%",
      "Harvesting": "0%"
    },
    "special": [
      "?"
    ],
    "requirements": "Crafted at Work Bench on the Item Collections tab after all other weapons and tools in the group have been crafted.",
    "craftingCost": [
      "30 Wood",
      "5 Lavender",
      "150 Iron Shards",
      "150 Dark Essence",
      "5 Light Stone"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Forged",
    "name": "Forged Axe",
    "type": "Axe",
    "stats": {
      "Damage": "Average",
      "Speed": "Average",
      "Critical Hits": "Very High",
      "Knockback": "10%",
      "Piercing Damage": "30%",
      "Slashing Damage": "50%",
      "Blunt Damage": "30%",
      "Woodcutting": "100%",
      "Mining": "0%",
      "Harvesting": "0%"
    },
    "special": [
      "Backhand Strike"
    ],
    "requirements": "Discovered within The Ancient Caves in an area beyond \"The Dungeon Crossing.\"",
    "craftingCost": [
      "N/A"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Forged",
    "name": "Forged Hammer",
    "type": "Hammer",
    "stats": {
      "Damage": "High",
      "Speed": "Low",
      "Critical Hits": "Average",
      "Knockback": "High",
      "Piercing Damage": "50%",
      "Slashing Damage": "50%",
      "Blunt Damage": "100%",
      "Woodcutting": "0%",
      "Mining": "50%",
      "Harvesting": "0%"
    },
    "special": [
      "Backhand Strike",
      "Swing and Smash",
      "Leaping Strike"
    ],
    "requirements": "Discovered within The Ancient Caves at the \"Electric Avenue\" fight.",
    "craftingCost": [
      "N/A"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Forged",
    "name": "Forged Pickaxe",
    "type": "Pickaxe",
    "stats": {
      "Damage": "High",
      "Speed": "Average",
      "Critical Hits": "High",
      "Crit Resource Bonus": "80%",
      "Piercing Damage": "20%",
      "Slashing Damage": "30%",
      "Blunt Damage": "40%",
      "Woodcutting": "0%",
      "Mining": "100%",
      "Harvesting": "0%"
    },
    "special": [
      "?"
    ],
    "requirements": "Acquired in the Voidboar boss arena.",
    "craftingCost": [
      "?"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Forged",
    "name": "Len's Island Forged Weapon Set Bonus Item - Forged Shield",
    "type": "Shield",
    "stats": {
      "Passive Blocking": "75%",
      "Active Blocking": "95%",
      "Speed Modifier": "0.6x"
    },
    "special": [
      "Block"
    ],
    "requirements": "Crafted at Work Bench on the Item Collections tab after all other weapons and tools in the group have been crafted.",
    "craftingCost": [
      "150 Iron Shards",
      "50 Salvaged Metal",
      "15 Light Stone"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Torches",
    "name": "Adventurer's Torch",
    "type": "Torch",
    "stats": null,
    "special": [
      "Provides light when held."
    ],
    "requirements": "Crafted at Level 1 Work Bench.",
    "craftingCost": [
      "10 Fibers",
      "10 Wood",
      "5 Coal"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Torches",
    "name": "Cresset Torch",
    "type": "Torch",
    "stats": null,
    "special": [
      "Provides light when held."
    ],
    "requirements": "Crafted at Level 2 Work Bench.",
    "craftingCost": [
      "15 Fibers",
      "10 Wood",
      "15 Coal",
      "45 Iron Shards"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Torches",
    "name": "Backpack Lamp",
    "type": "Torch",
    "stats": null,
    "special": [
      "Provides hands-free light."
    ],
    "requirements": "Crafted at Level 3 Work Bench.",
    "craftingCost": [
      "20 Fibers",
      "40 Wood",
      "25 Coal",
      "50 Iron Shards"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Watering Cans",
    "name": "Basic Watering Can",
    "type": "Watering Can",
    "stats": null,
    "special": [
      "Waters up to 4 Farm plots in a square. 2 uses."
    ],
    "requirements": "Crafted at Level 1 Work Bench.",
    "craftingCost": [
      "8 Fibers",
      "15 Wood",
      "5 Iron Shards"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Watering Cans",
    "name": "Farmer's Watering Can",
    "type": "Watering Can",
    "stats": null,
    "special": [
      "Waters up to 4 Farm plots in a square. 4 uses."
    ],
    "requirements": "Crafted at Level 2 Work Bench.",
    "craftingCost": [
      "10 Fibers",
      "30 Iron Shards"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Watering Cans",
    "name": "Big Bucket",
    "type": "Watering Can",
    "stats": null,
    "special": [
      "Waters up to 4 Farm plots in a square. 10 uses."
    ],
    "requirements": "Crafted at Level 3 Work Bench.",
    "craftingCost": [
      "5 Fibers",
      "10 Salvaged Metal",
      "25 Iron Shards",
      "75 Wood"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Exotic",
    "name": "Firery War Axe (Exotic Battle Axe)",
    "type": "Battle Axe",
    "stats": {
      "Damage": "High",
      "Speed": "Low",
      "Critical Hits": "High",
      "Knockback": "High",
      "Piercing Damage": "80%",
      "Slashing Damage": "80%",
      "Blunt Damage": "80%",
      "Woodcutting": "40%",
      "Mining": "0%",
      "Harvesting": "0%"
    },
    "special": [
      "Backhand Strike",
      "Leaping Strike"
    ],
    "requirements": "Purchased from Edwardo the Merchant on his boat in the eastern part of Bridgewater after buying all of the first wave of items and waiting several days.",
    "craftingCost": [
      "1,300 Coins"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Exotic",
    "name": "Ice Lance (Exotic Spear)",
    "type": "Spear",
    "stats": {
      "Damage": "High",
      "Speed": "Average",
      "Critical Hits": "High",
      "Knockback": "Average",
      "Piercing Damage": "100%",
      "Slashing Damage": "20%",
      "Blunt Damage": "20%",
      "Woodcutting": "0%",
      "Mining": "0%",
      "Harvesting": "0%"
    },
    "special": [
      "Thrust",
      "Triple Strike"
    ],
    "requirements": "Purchased from Edwardo the Merchant on his boat in the eastern part of Bridgewater.",
    "craftingCost": [
      "800 Coins"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Exotic",
    "name": "Shei'shien (Exotic Sword)",
    "type": "Sword",
    "stats": {
      "Damage": "High",
      "Speed": "High",
      "Critical Hits": "Average",
      "Knockback": "Average",
      "Piercing Damage": "50%",
      "Slashing Damage": "100%",
      "Blunt Damage": "20%",
      "Woodcutting": "0%",
      "Mining": "0%",
      "Harvesting": "0%"
    },
    "special": [
      "Charging Backhand Strike",
      "Leaping Strike"
    ],
    "requirements": "One of the final two items available at Edwardo the Merchant on his boat in the eastern part of Bridgewater after buying all of the other Exotic items and waiting several days.",
    "craftingCost": [
      "2,500 Coins"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Exotic",
    "name": "Destreza Rapier (Exotic Sword)",
    "type": "Sword",
    "stats": {
      "Damage": "Low",
      "Speed": "Very High",
      "Critical Hits": "High",
      "Knockback": "Low",
      "Piercing Damage": "100%",
      "Slashing Damage": "100%",
      "Blunt Damage": "10%",
      "Woodcutting": "not published",
      "Mining": "not published",
      "Harvesting": "not published"
    },
    "special": [
      "Thrust and Slash"
    ],
    "requirements": "Purchased from Edwardo the Merchant on his boat in the eastern part of Bridgewater.",
    "craftingCost": [
      "750 Coins"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Exotic",
    "name": "Golden Norse Shield (Exotic Shield)",
    "type": "Shield",
    "stats": {
      "Passive Blocking": "40%",
      "Active Blocking": "85%",
      "Critical Hits": "0.87x"
    },
    "special": [
      "Block"
    ],
    "requirements": "Purchased from Edwardo the Merchant on his boat in the eastern part of Bridgewater.",
    "craftingCost": [
      "650 Coins"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Exotic",
    "name": "Short-Blade (Exotic Dagger)",
    "type": "Dagger",
    "stats": {
      "Damage": "Low",
      "Speed": "Insane",
      "Critical Hits": "High",
      "Knockback": "Low",
      "Piercing Damage": "80%",
      "Slashing Damage": "100%",
      "Blunt Damage": "20%",
      "Woodcutting": "0%",
      "Mining": "0%",
      "Harvesting": "0%"
    },
    "special": null,
    "requirements": "Purchased from Edwardo the Merchant on his boat in the eastern part of Bridgewater after buying all of the first wave of items and waiting several days.",
    "craftingCost": [
      "1,550 Coins"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  },
  {
    "set": "Exotic",
    "name": "Exotic Feather Shield (Exotic Shield)",
    "type": "Shield",
    "stats": {
      "Passive Blocking": "-30%",
      "Active Blocking": "20%",
      "Speed Modifier": "1.2x"
    },
    "special": [
      "Block",
      "Note - Has a positive speed modifier, so equipping this shield actually makes you faster. However, it also increases the damage you receive."
    ],
    "requirements": "One of the final two items available at Edwardo the Merchant on his boat in the eastern part of Bridgewater after buying all of the other Exotic items and waiting several days.",
    "craftingCost": [
      "2,500 Coins"
    ],
    "source": "https://techraptor.net/gaming/guides/lens-island-weapon-guide"
  }
];

function findItem(name) {
  return ITEMS.find(i => i.name === name) || null;
}

function itemsByType(type) {
  return ITEMS.filter(i => type === "All" || i.type === type);
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    ITEMS, SOURCE_TECHRAPTOR, SOURCE_SNAPSHOT_DATE, SOURCE_SNAPSHOT_URL,
    findItem, itemsByType,
  };
}
