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
      <v-container fluid class="pa-4">
        <v-row>
          <v-col class="text-center" cols="12">
            <h1>Merhaba, Ben Efehan!</h1>
            <p class="subheading">Junior Geliştirici</p>
          </v-col>
        </v-row>
        <v-row id="about" class="my-5">
  <v-col cols="12">
    <h2>Hakkında</h2>
    <p>
      Merhaba, ben Efehan Koçak! Mersin’de doğmuş bir Junior Fullstack Developer olarak, yazılım geliştirme dünyasına olan ilgim her geçen gün daha da artıyor. 20 Mart 2004 tarihinde dünyaya geldim ve genç yaşımda teknolojiye olan tutkum beni bu alana yönlendirdi. Hem teorik bilgimi hem de pratik becerilerimi sürekli olarak geliştirerek, farklı projelerde deneyim kazandım.
    </p>
    <p>
      Geliştirici olarak amacım, işlevsel ve ölçeklenebilir uygulamalar oluştururken aynı zamanda kullanıcı dostu deneyimler sunmak. C#, JavaScript, TypeScript gibi güçlü dillerle kod yazmayı seviyor, Node.js ve Vue.js gibi modern framework’ler ile interaktif web uygulamaları geliştiriyorum. PHP ve React gibi teknolojilerle de proje çeşitliliğimi artırıyorum.
    </p>
    <p>
      Backend tarafında, SQL ve Azure gibi teknolojilerle veritabanı yönetimi ve sunucu tarafı geliştirmeleri konusunda sağlam bir altyapım var. Webpack gibi araçlar ile projelerimi optimize ederek daha verimli ve sürdürülebilir yazılımlar ortaya koyuyorum. Yazılım dünyasında sürekli öğrenmeye ve kendimi geliştirmeye büyük bir tutku ile devam ediyorum.
    </p>
  </v-col>
</v-row>

        <v-row id="skills" class="my-5">
          <v-col cols="12">
            <h2>Yetenekler</h2>
            <v-row>
              <v-col v-for="(skill, index) in skills" :key="index" cols="12" md="4">
                <v-card>
                  <v-card-title>
                    <v-icon left>{{ getSkillIcon(skill) }}</v-icon>
                    {{ skill }}
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
        'C#', 'SQL', 'Azure', 'JavaScript', 'TypeScript', 'Vue.js', 
        'Node.js', 'PHP', 'React', 'Webpack',
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
        
        // "wanderloq" isimli projeyi filtreliyoruz
        this.projects = projectsResponse.data
          .filter(project => project.name !== 'wanderloq')  // 'wanderloq' adlı projeyi dışarıda bırakıyoruz
          .map(project => ({
            name: project.name,
            description: project.description || 'Açıklama yok.',
            link: project.html_url,
            updated_at: project.updated_at,
          }))
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)); // En yeni önce
      } catch (error) {
        console.error('Veri çekme hatası:', error);
      }
    },
    getSkillIcon(skill) {
      const icons = {
        'JavaScript': 'mdi-language-javascript',
        'Vue.js': 'mdi-vuejs',
        'Node.js': 'mdi-nodejs',
        'React': 'mdi-react',
        'PHP': 'mdi-language-php',
        'SQL': 'mdi-database',
        'C#': 'mdi-language-csharp',
        'TypeScript': 'mdi-language-typescript',
        'Azure': 'mdi-microsoft-azure',
        'Webpack': 'mdi-webpack',
      };
      return icons[skill] || 'mdi-help-circle';
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
  justify-content: center;
}

.nav-buttons {
  display: flex;
  gap: 10px;
  justify-content: center;
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
  gap: 15px;
  margin-top: 10px;
}

.social-media a {
  color: inherit;
}

.social-media v-icon {
  font-size: 24px;
}
</style>
