<template>
    <div class="base">
      <navbar />
      <div class="main-body">
        <div class="header">
          <div class="main-title">My Projects</div>
          <p>These are some of the projects I've worked on and loved them. I have worked on many other projects as well but these are the ones that are public and my favorites.</p>
        </div>
        <group>
          <!--<p-card title="Japanlexus" link="https://jpnlex.us">
            One of my oldest projects - randomly suggests an anime (series, movies or musical pieces) every 30 seconds. Currently covers over 14,000 anime.
          </p-card>
          <p-card title="Disco-OAuth" link="https://disco-oauth.tk"> 
            A node.js library for quickly setting up <a href="https://discord.com" target="_blank">Discord</a> OAuth workflow in your project. Quick, fast, small in size and most importantly - Object Oriented!
          </p-card>
        </group>
        <group>
          <p-card title="Repl.it Starboard" link="https://starboard.repl.co">
            A starboard discord bot, originally created for the <a href="https://repl.it/discord" target="_blank">repl.it discord server</a>. Now a quick setup, easy to use, fun bot for all.
          </p-card>
          <p-card title="KLOUD Bot" link="https://discord.gg/wearekloud">
            Another discord bot, made for <a href="https://wearekloud.com/" target="_blank">KLOUD's discord server</a>. KLOUD is a masked electronic music producer exploring the darker themes of the genre (WIP).
          </p-card>
        </group>
        <group>
          <p-card title="This website" link="/">
            This is my portfolio website, written using the nuxtjs framework, check out the source code on <a href="https://github.com/TheDrone7/portfolio" target="_blank">GitHub</a>.
          </p-card>
          <p-card title="Descord" link="https://github.com/TheDrone7/descord">
            A discord API wrapper for making discord bots in deno using TypeScript. Currently under development but planned to have a built-in logging system, command framework and database connectivity and much more!
          </p-card>
        </group>
        <group>
          <p-card title="Coronajam" link="https://cjnine.thedrone7.repl.co/">
            A very simple 2D platformer game that explains the COVID-19 prevention tips and also provides useful links when you complete the game to further improve your knowledge about the pandemic and how you can stay safe.
          </p-card> -->
        </group>
        <div class="footer">
          <p>Apart from the above projects, I've also written many tutorials such as hosting discord bots written with <a href="https://repl.it/talk/learn/Hosting-discordpy-bots-with-replit/11008" target="_blank">python</a> and <a href="https://repl.it/talk/learn/Hosting-discordjs-bots-on-replit-Works-for-both-discordjs-and-Eris/11027" target="_blank">NodeJS</a> on <a href="https://repl.it">repl.it</a>.</p>
          <p>As a community manager, I've also organized the Repl.it weekly challenges and developer spotlights. You can check those out on <a href="https://repl.it/talk/announcements">repl talk</a>!</p>
        </div>
      </div>
    </div>
</template>

<script>
  import Navbar from '../components/navbar'
  import PCard from '../components/pCard'
  import Group from '../components/group'
  export default {
    name: 'projects',
    components: { Group, PCard, Navbar },
    layout: 'project'
  }
</script>

<style scoped>
  .base {
    width: 100%;
    height: 100%;
  }
  .main-body {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
    width: 100%;
  }
  .header {
    width: 25%;
  }
  .main-title {
    font-size: 2rem;
  }

  @media screen and (max-width: 1080px) {
    .header, .footer {
      width: 75%;
    }
  }
</style>
