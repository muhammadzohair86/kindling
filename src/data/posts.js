import { readingTime } from '../lib.js';

export const categories = ['All', 'Travel', 'Outdoors', 'Seasons', 'Home', 'Life', 'Writing'];

const raw = [
  {
    slug: 'golden-hour-on-the-ridge', featured: true, format: 'story', cat: 'Travel', date: '2026-10-21',
    title: 'Golden hour on the ridge', img: 'slider.jpg', pos: '50% 55%', alt: 'A woman sitting on a rocky ridge above a valley in warm evening light',
    tags: ['sunset', 'mountains', 'slow travel'],
    excerpt: 'A late-afternoon scramble taught me more about patience than any guidebook, and gave me forty minutes I still think about.',
    body: [
      'There is a window of about forty minutes, just before the sun drops behind the far ridge, when the whole valley turns the colour of honey. I found it by accident, after misjudging a trail and reaching the top much later than planned.',
      'What I remember is not the view. It is the quiet. Nobody else was up there, the wind had dropped, and for once I had nothing to photograph or plan. I sat down on the warm rock and simply watched the light move across the land.',
      '## Plan for the light, not the summit',
      'Most hiking advice is about reaching the top. Sunrise and sunset walks reward a different kind of planning: work backwards from the moment the light fades, and leave a generous margin.',
      '- Check the sunset time, then subtract your walking time plus an hour|Pack a headlamp even if you expect to be back early|Tell someone your route and when you plan to return|Bring one extra warm layer, because ridges cool quickly',
      '> The best view of the day is usually the one you almost did not wait for.',
      'I climbed down in the blue half-light with cold fingers and a very full head. It was, without question, the best mistake of the season.',
    ],
  },
  {
    slug: 'why-i-love-winter', format: 'story', cat: 'Seasons', date: '2026-10-14',
    title: 'Why I love winter: a short story', img: '1.jpg', pos: '50% 40%', alt: 'A woman in a cap and denim jacket crouching on white frosted rocks',
    tags: ['winter', 'snow', 'slow living'],
    excerpt: 'Short days, long evenings and the strange freedom of a world that has gone quiet.',
    body: [
      'People are often surprised when I say winter is my favourite season. They picture grey skies and frozen fingers. I picture the first morning the air turns sharp and everything outside seems to hold its breath.',
      'Winter gives you permission to slow down. The days are short, so you stop trying to cram them full. Evenings arrive early and stretch out, and suddenly there is time for soup that simmers for hours, for books you meant to finish, for calling a friend who lives far away.',
      '## Small rituals that make it work',
      '- Take a walk at midday, when the light is best|Keep a thermos by the door so leaving the house feels easy|Light a candle at four o\'clock and call it the start of the evening|Plan something to look forward to every weekend',
      'The cold is only a problem if you refuse to dress for it. Once you have the right layers, a frozen field or an icy shoreline becomes one of the most beautiful places you can stand.',
      '> Winter is not the absence of warmth. It is the season that teaches you to make your own.',
      'So here is to the long dark months, and to everything we find to enjoy inside them.',
    ],
  },
  {
    slug: 'travel-tips-for-nature-lovers', format: 'story', cat: 'Travel', date: '2026-10-07',
    title: 'Travel tips for nature lovers', img: '2.jpg', pos: '50% 35%', alt: 'A woman lying in a golden wheat field with a straw hat over her face',
    tags: ['travel tips', 'outdoors', 'planning'],
    excerpt: 'Seven habits that make trips to wild places lighter, kinder and a lot more enjoyable.',
    body: [
      'The best trips I have taken were rarely the most ambitious. They were the ones where I left room to wander, to stop for a field that looked too good to walk past, and to lie in the grass for no reason at all.',
      '## Before you go',
      '- Choose one base and explore around it instead of changing hotels every night|Read the local rules for fires, camping and protected areas|Download offline maps, because signal disappears faster than you expect|Pack a reusable bottle, a small first-aid kit and a spare phone battery',
      '## While you are there',
      'Walk more slowly than feels necessary. Notice the sounds first, then the colours. Stay on marked paths, take your rubbish with you and leave what you find, including pretty stones and wildflowers, exactly where it is.',
      '> If a place moves you, the kindest thing you can do is leave no trace that you were there.',
      '## When you get home',
      'Write down three things you want to remember before the details fade. A few lines in a notebook are worth more than a hundred photographs you never look at again.',
    ],
  },
  {
    slug: 'how-to-dress-for-a-hiking-trip', format: 'story', cat: 'Outdoors', date: '2026-09-29',
    title: 'How to dress for a hiking trip', img: '3.jpg', pos: '50% 30%', alt: 'A hiker in a beanie and blue jacket looking out over a calm lake',
    tags: ['hiking', 'layering', 'gear'],
    excerpt: 'Layers beat bulk every time. Here is a simple system that works from spring drizzle to winter frost.',
    body: [
      'Dressing for a hike is less about fashion and more about managing temperature. You will warm up as you climb and cool down the moment you stop, so your clothes need to adapt.',
      '## The three-layer idea',
      '- Base layer: a snug, moisture-wicking top that keeps sweat away from your skin|Mid layer: fleece or light wool for warmth you can add or remove|Outer layer: a windproof, water-resistant shell that packs small',
      'Cotton is the one fabric to avoid. It holds moisture and turns cold quickly, which is exactly what you do not want halfway up a hill.',
      '## Do not forget the extremities',
      'A hat, thin gloves and good socks take almost no space and make a big difference. Break in your boots on shorter walks first, and carry a spare pair of socks for the way back.',
      '> You should feel slightly cool when you set off. If you are comfortable at the car park, you will be too warm ten minutes later.',
      'Get the layers right and the weather stops being something to worry about. It becomes part of the scenery.',
    ],
  },
  {
    slug: 'ten-tips-for-a-beautiful-party', format: 'story', cat: 'Home', date: '2026-09-18',
    title: '10 tips to create a beautiful party', img: 'blog-image.jpg', pos: '50% 50%', alt: 'A flat lay of coffee, flowers and patterned socks on a white bed',
    tags: ['hosting', 'flowers', 'entertaining'],
    excerpt: 'You do not need a big budget to host something memorable. You need a plan, good light and a few fresh flowers.',
    body: [
      'The gatherings people remember are rarely the most elaborate. They are the ones where the host seemed relaxed, the room felt warm and nobody had to ask where to put their coat.',
      '## Ten things that always help',
      '- Decide the mood first, then choose everything else to match|Send invitations early and say clearly when the party ends|Prepare food that can be made ahead|Use lamps and candles instead of overhead lights|Clear a space for coats and bags|Create one signature drink|Fill the room with flowers, even simple ones|Make a playlist and test it beforehand|Set out seating in small clusters|Leave yourself twenty minutes to get ready',
      'img:blog-img-1.png|A woman in glasses and a white scarf standing among cherry blossoms|blog-img-2.png|A desk covered in wrapped gifts, a laptop, tea and stationery',
      '## Plan the details early',
      'Wrapping gifts, writing place cards and sketching the layout a few days ahead turns the day itself into something you can enjoy rather than endure.',
      '> A relaxed host is the best decoration a party can have.',
      'Pour yourself something, put on the music and let the evening do the rest.',
    ],
  },
  {
    slug: 'my-fall-in-love-story', format: 'story', cat: 'Life', date: '2026-09-05',
    title: 'My fall in love story', img: 'about.jpg', pos: '50% 35%', alt: 'A couple smiling at each other in a forest, foreheads almost touching',
    tags: ['love', 'autumn', 'stories'],
    excerpt: 'Falling in love slowly, one ordinary afternoon at a time, and why I trust it more than the movie version.',
    body: [
      'I used to think love would arrive with a flourish. A look across a room, a swell of music, a moment you could point to afterwards and say: that was it.',
      'It was nothing like that. It was a slow accumulation of small, good things. Someone who remembered how I took my coffee. Someone who walked at my pace without being asked. Someone who made autumn feel like the beginning of something rather than the end of summer.',
      '## What I noticed along the way',
      '- The people who make you feel calm are worth paying attention to|Kindness shows up in tiny, repeated actions|You can be completely yourself and still be wanted|The best conversations happen while walking side by side',
      '> The big moments were never the point. It was the thousand small ones that made them possible.',
      'Years on, the forest where we first walked together still feels like a quiet landmark. I do not need a movie ending. I have something better: an ordinary Tuesday with the right person.',
    ],
  },
  {
    slug: 'a-slow-spring-refresh', format: 'story', cat: 'Home', date: '2026-08-22',
    title: 'A slow spring refresh for your home', img: 'about-2.png', pos: '50% 50%', alt: 'A collage of a white dresser, pink flowers, a bicycle and neatly hung clothes',
    tags: ['home', 'spring', 'decluttering'],
    excerpt: 'Skip the marathon clean. A gentle, room-by-room reset leaves the house lighter and your weekends free.',
    body: [
      'Spring cleaning has a reputation for being exhausting. I prefer to think of it as a slow reset, done in small pieces over several weeks, with the windows open and the radio on.',
      '## Start with one drawer',
      'Pick a single drawer or shelf. Take everything out, wipe the surface and put back only what you use or love. The satisfaction is surprisingly addictive, and it builds momentum for larger jobs.',
      '## A simple weekly rhythm',
      '- Week one: wardrobe and shoes|Week two: kitchen cupboards|Week three: bookshelves and paperwork|Week four: the entrance, balcony or garden',
      'Give clothes you no longer wear to friends or a local charity shop. Keep a bag by the door so items have somewhere to go the moment you decide to part with them.',
      '> A lighter home is not an emptier one. It is one where everything left has earned its place.',
      'Finish by bringing in something fresh: a bunch of flowers, a clean throw, a candle that smells like rain.',
    ],
  },
  {
    slug: 'mans-best-friend', format: 'note', cat: 'Life', date: '2026-08-09',
    title: 'Man\u2019s best friend', img: 'foot-2.jpg', pos: '50% 40%', alt: 'A husky with bright eyes sitting in the snow',
    tags: ['dogs', 'winter', 'walks'],
    excerpt: 'A short note on why a snowy morning is a dog\u2019s idea of heaven, and what it teaches me.',
    body: [
      'Every winter morning, the same ritual. I open the door and the husky shoots past me into the snow as if she has never seen it before.',
      'Dogs have a gift for being fully present. There is no worrying about tomorrow, no checking a phone, only the cold air and the next interesting smell.',
      '> Whatever your plans are today, someone nearby would be happy simply to go for a walk.',
      'I try to borrow a little of that attention on every outing. It makes the familiar route feel new again.',
    ],
  },
  {
    slug: 'writing-on-a-budget', format: 'note', cat: 'Writing', date: '2026-07-27',
    title: 'Writing on a budget', img: 'foot-3.jpg', pos: '50% 40%', alt: 'A woman typing on a laptop at an outdoor cafe table',
    tags: ['writing', 'habits', 'budget'],
    excerpt: 'You do not need a studio or fancy software. You need a table, a timer and a cup of something warm.',
    body: [
      'I wrote most of my early pieces at a cafe table, one coffee stretched across two hours. The setup cost almost nothing and it taught me everything about habit.',
      '- Set a timer for twenty-five minutes and write until it rings|Keep a notebook for ideas so you never start from a blank page|Use free tools until you know what you actually need|Write at the same time every day, even if it is only a paragraph',
      'The equipment matters far less than the routine. Show up at the same table often enough and the words begin to arrive on their own.',
    ],
  },
  {
    slug: 'a-weekend-in-new-york', format: 'note', cat: 'Travel', date: '2026-07-11',
    title: 'A weekend in New York', img: 'thumb-4.jpg', pos: '50% 30%', alt: 'A tall, narrow wedge-shaped building rising against a bright blue sky',
    tags: ['city break', 'architecture', 'weekend'],
    excerpt: 'Two days, comfortable shoes and a habit of looking up. A quick note on seeing a big city slowly.',
    body: [
      'Big cities can feel like a checklist, so on my last weekend away I made only one rule: look up. Above the busy pavements there is a whole second city of cornices, water towers and impossibly narrow buildings.',
      '- Walk between neighbourhoods instead of taking the metro every time|Book one dinner and leave everything else open|Visit parks early, before the crowds arrive',
      'I came home with tired feet, a full camera roll and the feeling that I had finally listened to a place instead of rushing through it.',
    ],
  },
];

export const posts = raw
  .map((p) => ({ ...p, read: readingTime(p.body) }))
  .sort((a, b) => b.date.localeCompare(a.date));

export const bySlug = (slug) => posts.find((p) => p.slug === slug);
export const allTags = [...new Set(posts.flatMap((p) => p.tags))].sort();
