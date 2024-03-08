import express from "express";
import jQuery from "jquery";
import { JSDOM } from "jsdom";
import morgan from "morgan";

const { window } = new JSDOM("");
const $ = jQuery(window);

const app = express();
const port = 3000;
var __blogs = [];
var id = 0;

function Blog(id, title, author, date, content, authorInfo, notes) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.date = date;
  this.content = content;
  this.authorInfo = authorInfo;
  this.notes = notes;
}

function sortBlogs(req, res, next) {
  __blogs.sort((a, b) => {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);
    return bDate - aDate;
  });
  next();
}

const blog1 = new Blog(
  id++,
  "Why It's Safe for Founders to Be Nice",
  "Paul Graham",
  "August 2015",
  `I recently got an email from a founder that helped me understand something important: why it's safe for startup founders to be nice people.

I grew up with a cartoon idea of a very successful businessman (in the cartoon it was always a man): a rapacious, cigar-smoking, table-thumping guy in his fifties who wins by exercising power, and isn't too fussy about how. As I've written before, one of the things that has surprised me most about startups is how few of the most successful founders are like that. Maybe successful people in other industries are; I don't know; but not startup founders. [1]

I knew this empirically, but I never saw the math of why till I got this founder's email. In it he said he worried that he was fundamentally soft-hearted and tended to give away too much for free. He thought perhaps he needed "a little dose of sociopath-ness."

I told him not to worry about it, because so long as he built something good enough to spread by word of mouth, he'd have a superlinear growth curve. If he was bad at extracting money from people, at worst this curve would be some constant multiple less than 1 of what it might have been. But a constant multiple of any curve is exactly the same shape. The numbers on the Y axis are smaller, but the curve is just as steep, and when anything grows at the rate of a successful startup, the Y axis will take care of itself.

Some examples will make this clear. Suppose your company is making $1000 a month now, and you've made something so great that it's growing at 5% a week. Two years from now, you'll be making about $160k a month.

Now suppose you're so un-rapacious that you only extract half as much from your users as you could. That means two years later you'll be making $80k a month instead of $160k. How far behind are you? How long will it take to catch up with where you'd have been if you were extracting every penny? A mere 15 weeks. After two years, the un-rapacious founder is only 3.5 months behind the rapacious one. [2]

If you're going to optimize a number, the one to choose is your growth rate. Suppose as before that you only extract half as much from users as you could, but that you're able to grow 6% a week instead of 5%. Now how are you doing compared to the rapacious founder after two years? You're already ahead—$214k a month versus $160k—and pulling away fast. In another year you'll be making $4.4 million a month to the rapacious founder's $2 million.

Obviously one case where it would help to be rapacious is when growth depends on that. What makes startups different is that usually it doesn't. Startups usually win by making something so great that people recommend it to their friends. And being rapacious not only doesn't help you do that, but probably hurts. [3]

The reason startup founders can safely be nice is that making great things is compounded, and rapacity isn't.

So if you're a founder, here's a deal you can make with yourself that will both make you happy and make your company successful. Tell yourself you can be as nice as you want, so long as you work hard on your growth rate to compensate. Most successful startups make that tradeoff unconsciously. Maybe if you do it consciously you'll do it even better.`,
  "Paul Graham is known for his profound insights and visionary wisdom. His illustrious journey includes founding the influential startup accelerator Y Combinator and penning enlightening works such as Hackers & Painters and On Lisp.",
  "Trevor Blackwell, Patrick Collison, Tyler Cowen, Jessica Livingston, Harj Taggar, and Garry Tan"
);

const blog2 = new Blog(
  id++,
  "Alien Truth",
  "Paul Graham",
  "October 2022",
  `If there were intelligent beings elsewhere in the universe, they'd share certain truths in common with us. The truths of mathematics would be the same, because they're true by definition. Ditto for the truths of physics; the mass of a carbon atom would be the same on their planet. But I think we'd share other truths with aliens besides the truths of math and physics, and that it would be worthwhile to think about what these might be.

For example, I think we'd share the principle that a controlled experiment testing some hypothesis entitles us to have proportionally increased belief in it. It seems fairly likely, too, that it would be true for aliens that one can get better at something by practicing. We'd probably share Occam's razor. There doesn't seem anything specifically human about any of these ideas.

We can only guess, of course. We can't say for sure what forms intelligent life might take. Nor is it my goal here to explore that question, interesting though it is. The point of the idea of alien truth is not that it gives us a way to speculate about what forms intelligent life might take, but that it gives us a threshold, or more precisely a target, for truth. If you're trying to find the most general truths short of those of math or physics, then presumably they'll be those we'd share in common with other forms of intelligent life.

Alien truth will work best as a heuristic if we err on the side of generosity. If an idea might plausibly be relevant to aliens, that's enough. Justice, for example. I wouldn't want to bet that all intelligent beings would understand the concept of justice, but I wouldn't want to bet against it either.

The idea of alien truth is related to Erdos's idea of God's book. He used to describe a particularly good proof as being in God's book, the implication being (a) that a sufficiently good proof was more discovered than invented, and (b) that its goodness would be universally recognized. If there's such a thing as alien truth, then there's more in God's book than math.

What should we call the search for alien truth? The obvious choice is "philosophy." Whatever else philosophy includes, it should probably include this. I'm fairly sure Aristotle would have thought so. One could even make the case that the search for alien truth is, if not an accurate description of philosophy, a good definition for it. I.e. that it's what people who call themselves philosophers should be doing, whether or not they currently are. But I'm not wedded to that; doing it is what matters, not what we call it.

We may one day have something like alien life among us in the form of AIs. And that may in turn allow us to be precise about what truths an intelligent being would have to share with us. We might find, for example, that it's impossible to create something we'd consider intelligent that doesn't use Occam's razor. We might one day even be able to prove that.But though this sort of research would be very interesting, it's not necessary for our purposes, or even the same field; the goal of philosophy, if we're going to call it that, would be to see what ideas we come up with using alien truth as a target, not to say precisely where the threshold of it is. Those two questions might one day converge, but they'll converge from quite different directions, and till they do, it would be too constraining to restrict ourselves to thinking only about things we're certain would be alien truths. Especially since this will probably be one of those areas where the best guesses turn out to be surprisingly close to optimal. (Let's see if that one does.)

Whatever we call it, the attempt to discover alien truths would be a worthwhile undertaking. And curiously enough, that is itself probably an alien truth.`,
  "Paul Graham is known for his profound insights and visionary wisdom. His illustrious journey includes founding the influential startup accelerator Y Combinator and penning enlightening works such as Hackers & Painters and On Lisp.",
  "Trevor Blackwell, Patrick Collison, Tyler Cowen, Jessica Livingston, Harj Taggar, and Garry Tan"
);

const blog3 = new Blog(
  id++,
  "The Need to Read",
  "Paul Graham",
  "November 2011",
  `In the science fiction books I read as a kid, reading had often been replaced by some more efficient way of acquiring knowledge. Mysterious "tapes" would load it into one's brain like a program being loaded into a computer.

That sort of thing is unlikely to happen anytime soon. Not just because it would be hard to build a replacement for reading, but because even if one existed, it would be insufficient. Reading about x doesn't just teach you about x; it also teaches you how to write. [1]

Would that matter? If we replaced reading, would anyone need to be good at writing?

The reason it would matter is that writing is not just a way to convey ideas, but also a way to have them.

A good writer doesn't just think, and then write down what he thought, as a sort of transcript. A good writer will almost always discover new things in the process of writing. And there is, as far as I know, no substitute for this kind of discovery. Talking about your ideas with other people is a good way to develop them. But even after doing this, you'll find you still discover new things when you sit down to write. There is a kind of thinking that can only be done by writing.

There are of course kinds of thinking that can be done without writing. If you don't need to go too deeply into a problem, you can solve it without writing. If you're thinking about how two pieces of machinery should fit together, writing about it probably won't help much. And when a problem can be described formally, you can sometimes solve it in your head. But if you need to solve a complicated, ill-defined problem, it will almost always help to write about it. Which in turn means that someone who's not good at writing will almost always be at a disadvantage in solving such problems.

You can't think well without writing well, and you can't write well without reading well. And I mean that last "well" in both senses. You have to be good at reading, and read good things. [2]

People who just want information may find other ways to get it. But people who want to have ideas can't afford to.`,
  "Paul Graham is known for his profound insights and visionary wisdom. His illustrious journey includes founding the influential startup accelerator Y Combinator and penning enlightening works such as Hackers & Painters and On Lisp.",
  ""
);

__blogs.push(blog1);
__blogs.push(blog2);
__blogs.push(blog3);

app.use(morgan("tiny"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(sortBlogs);

app.get("/", (req, res) => {
  res.render("index.ejs", { blogs: __blogs });
});

app.get("/tools", (req, res) => {
  res.render("tools.ejs", { blogs: __blogs });
});

app.get("/tools/add", (req, res) => {
  res.render("add.ejs", { blogs: __blogs });
});

app.get("/tools/:id", (req, res) => {
  var __currentBlog = __blogs.find((blog) => blog.id == req.params.id);
  __currentBlog.content = __currentBlog.content.replace(/<br \/><br \/>/g, "");

  res.render("update.ejs", { blogs: __blogs, currentBlog: __currentBlog });
});

app.put("/tools/:id", (req, res) => {
  const id = req.params.id;
  const blogtoUpdate = __blogs.find((blog) => blog.id == id);
  const blogIndex = __blogs.indexOf(blogtoUpdate);
  req.body.date = new Date().toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
  });
  Object.assign(blogtoUpdate, req.body);
  __blogs[blogIndex] = blogtoUpdate;

  res.redirect("/tools");
});

app.post("/tools/add/submit", (req, res) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = months[new Date().getMonth()] + " " + new Date().getFullYear();
  const parsedContent = "";
  const parsedAuthorInfo = "";

  __blogs.push(
    new Blog(
      id++,
      req.body.title,
      req.body.author,
      new Date().toLocaleDateString("en-us", {
        year: "numeric",
        month: "long",
      }),
      req.body.content.replace(new RegExp("\r?\n", "g"), "<br />"),
      req.body.authorInfo,
      req.body.notes
    )
  );

  res.redirect("/");
});

app.delete("/tools/delete", (req, res) => {
  const id = req.body.id;
  const blogtoDelete = __blogs.find((blog) => blog.id == id);
  const blogIndex = __blogs.indexOf(blogtoDelete);
  __blogs.splice(blogIndex, 1);

  console.log(id);

  res.redirect("/tools");
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  var blogtoShow = __blogs.find((blog) => blog.id == id);
  //blogtoShow.content = blogtoShow.content.replace(/<br \/><br \/>/g, "");

  res.render("view.ejs", { blogs: __blogs, blog: blogtoShow });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
