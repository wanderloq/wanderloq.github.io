<template>
  <v-app>
    <div class="nav-bar">
      <div class="nav-buttons">
        <v-btn text @click="scrollToSection('about')">Hakkında</v-btn>
        <v-btn text @click="scrollToSection('skills')">Yetenekler</v-btn>
        <v-btn text @click="scrollToSection('projects')">Projeler</v-btn>
        <v-btn text @click="scrollToSection('contact')">İletişim</v-btn>
      </div>
    </div>
    <v-main>
      <v-container fluid style="background-color: white; padding: 20px;">
        <v-row>
          <v-col class="text-center" cols="12">
            <h1>Merhaba, Ben Efehan!</h1>
            <p style="font-size: 1.5em;">Junior Geliştirici</p> 
          </v-col>
        </v-row>

        <v-row id="about" class="my-5">
          <v-col cols="12">
            <h2>Hakkında</h2>
            <p>Merhaba, ben Efehan Koçak!</p>
            <p>Mersin’de doğmuş bir Junior Geliştirici olarak, web geliştirme ve tasarım konularında tutku doluyum. 20 Mart 2004 tarihinde dünyaya geldim ve genç yaşımda teknolojiye olan ilgim beni bu alana yönlendirdi. Çeşitli projelerde çalışarak hem teorik bilgimi hem de pratik becerilerimi geliştirmeye devam ediyorum.</p>
            <p>Kod yazarken yenilikçi çözümler üretmeyi ve kullanıcı deneyimini ön planda tutmayı hedefliyorum. Farklı teknolojilerle çalışmak ve sürekli öğrenmek, benim için vazgeçilmez bir tutku.</p> 
          </v-col>
        </v-row>

        <v-row id="skills" class="my-5">
          <v-col cols="12">
            <h2>Yetenekler</h2>
            <v-row>
              <v-col v-for="(skill, index) in skills" :key="index" cols="12" md="4">
                <v-card>
                  <v-card-title>
                    <v-icon left>{{ getSkillIcon(skill.name) }}</v-icon>
                    {{ skill.name }}
                  </v-card-title>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row id="projects" class="my-5">
          <v-col cols="12">
            <h2>Projeler</h2>
            <v-row>
              <v-col v-for="(project, index) in projects" :key="index" cols="12" md="6">
                <v-card>
                  <v-card-title>{{ project.name }}</v-card-title>
                  <v-card-text>{{ project.description }}</v-card-text>
                  <v-card-actions>
                    <v-btn :href="project.link" target="_blank" color="indigo">Detaylar</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row id="contact" class="my-5">
          <v-col cols="12">
            <h2>İletişim</h2>
            <p>E-posta: efehanisreal@icloud.com</p>
            <div class="social-media">
              <a href="https://instagram.com/efehan.kocak" target="_blank">
                <v-icon large color="pink">mdi-instagram</v-icon>
              </a>
              <a href="https://twitter.com/wanderloq" target="_blank">
                <v-icon large color="blue">mdi-twitter</v-icon>
              </a>
              <a href="https://open.spotify.com/user/1h39v8512q6u0kyj9lx8wpz2a?si=b147321183884f7a" target="_blank">
                <v-icon large color="blue">mdi-spotify</v-icon>
              </a>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  name: "MyDashboard",
  data() {
    return {
      skills: [
        { name: 'C#' },
        { name: 'SQL' },
        { name: 'Azure' },
        { name: 'JavaScript' },
        { name: 'TypeScript' },
        { name: 'Vue.js' }, 
        { name: 'Node.js' },
        { name: 'PHP' },
        { name: 'React' },
        { name: 'Webpack' },
      ],
      projects: [],
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    async fetchData() {
      try {
        const projectsResponse = await axios.get('https://api.github.com/users/wanderloq/repos');
        this.projects = projectsResponse.data.map(project => ({
          name: project.name,
          description: project.description || 'Açıklama yok.',
          link: project.html_url,
        }));
      } catch (error) {
        console.error('Veri çekme hatası:', error);
      }
    },
    getSkillIcon(skillName) {
      const icons = {
        'JavaScript': 'mdi-language-javascript',
        'Vue.js': 'mdi-vuejs',
        'CSS': 'mdi-language-css3',
        'HTML': 'mdi-language-html5',
        'Node.js': 'mdi-nodejs',
        'React': 'mdi-react',
        'Angular': 'mdi-angular',
        'Python': 'mdi-python',
        'Java': 'mdi-language-java',
        'PHP': 'mdi-language-php',
        'Ruby': 'mdi-language-ruby',
        'Git': 'mdi-git',
        'Docker': 'mdi-docker',
        'Figma': 'mdi-figma',
        'Photoshop': 'mdi-adobe-photoshop',
        'Illustrator': 'mdi-adobe-illustrator',
        'SQL': 'mdi-database',
        'TypeScript': 'mdi-language-typescript',
        'Sass': 'mdi-sass',
        'C#': 'mdi-language-csharp',
        'Go': 'mdi-golang',
        'Swift': 'mdi-language-swift',
        'Kotlin': 'mdi-language-kotlin',
        'Rust': 'mdi-language-rust',
        'Firebase': 'mdi-fire',
        'WordPress': 'mdi-wordpress',
        'Jest': 'mdi-robot',
        'Webpack': 'mdi-webpack',
        'Babel': 'mdi-babel',
        'Yarn': 'mdi-yarn',
        'GraphQL': 'mdi-graphql',
        'AWS': 'mdi-amazon-web-services',
        'Azure': 'mdi-microsoft-azure',
        'Heroku': 'mdi-heroku',
        'Kubernetes': 'mdi-kubernetes',
        'TensorFlow': 'mdi-tensorflow',
      };
      return icons[skillName] || 'mdi-help-circle';
    }
  },
  created() {
    this.fetchData();
  },
};
</script>

<style scoped>
.nav-bar {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  background-color: white;
  z-index: 10;
  padding: 10px 0;
  display: flex;
  justify-content: center; /* Butonları ortalar */
  flex-wrap: wrap; /* Taşan butonları bir alt satıra alır */
}

.nav-buttons {
  display: flex;
  gap: 10px; /* Boşluğu azaltarak daha fazla alan sağlar */
  flex-wrap: wrap; /* Mobilde taşmayı önler */
  justify-content: center; /* Butonları ortalar */
}

.v-container {
  max-width: 900px;
  margin: 0 auto;
}

h1 {
  margin-top: 70px;
}

h2 {
  margin-top: 40px;
  margin-bottom: 20px;
}

.social-media {
  display: flex;
  gap: 15px; /* İkonlar arasındaki boşluk */
  margin-top: 10px; /* Üstten boşluk */
}

.social-media a {
  color: inherit; /* Renk miras al */
}

.social-media v-icon {
  font-size: 24px; /* İkon boyutu */
}


.social-media {
  display: flex;
  gap: 15px; /* İkonlar arasındaki boşluk */
  margin-top: 10px; /* Üstten boşluk */
}

.social-media a {
  color: inherit; /* Renk miras al */
}

.social-media v-icon {
  font-size: 24px; /* İkon boyutu */
}
</style>
