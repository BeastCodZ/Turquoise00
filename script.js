const sentences = [
    "Turquoise skies, your eyes so bright<br>With a heart of gold, shining light<br>From Antalya, you stole my heart<br>Your kindness sets you apart",
    "My friend, my sister, my heart so dear<br>I hope that you are always near<br>Though we may be miles apart<br>Your place in my heart will never depart",
    "Your smile shines like the sun<br>Bringing joy to everyone<br>In a world so full of pain<br>You light up my life again",
    "Though we may not talk every day<br>Know that I'm thinking of you in every way<br>And when we meet again someday<br>I'll hug you tight and never let you stray",
    "Every night, I lay in bed<br>Thoughts of you swirling in my head<br>I can't escape, I can't break free<br>From this madness that's consuming me"
  ];
  const output = document.getElementById("output");
  const sentence = sentences[Math.floor(Math.random() * sentences.length)];
  output.innerHTML = sentence;
  