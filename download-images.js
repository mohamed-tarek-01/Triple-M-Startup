// Script to download images and save them locally
// Run with: node download-images.js

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Create images directory
const imagesDir = path.join(__dirname, 'frontend', 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Original image URLs to download
const imagesToDownload = [
  {
    url: 'https://i.ibb.co/Kj7pLK9X/Whats-App-Image-2025-11-29-at-15-26-53-8cee6c15.jpg',
    filename: 'mohamed-tarek.jpg',
    type: 'team'
  },
  {
    url: 'https://i.ibb.co/4ZR8ggmY/Whats-App-Image-2025-11-29-at-21-55-21-cf6af35a.jpg',
    filename: 'mohamed-abbes.jpg',
    type: 'team'
  },
  {
    url: 'https://i.ibb.co/Wp7k5fdb/1761741508291.png',
    filename: 'mohamed-bisher.png',
    type: 'team'
  },
  {
    url: 'https://raw.githubusercontent.com/mohamed-tarek-01/Exam-Timetabling-Optimization/main/screenshot.png',
    filename: 'exam-timetabling.png',
    type: 'project',
    fallback: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop'
  },
  {
    url: 'https://i.ibb.co/jZrhFNT3/Whats-App-Image-2025-11-30-at-20-41-10-fbd4ba27-waifu2x-art-noise2-scale.png',
    filename: 'lost-found.png',
    type: 'project'
  },
  {
    url: 'https://i.ibb.co/VY5XhfCZ/Screenshot-2025-11-30-223103.png',
    filename: 'ecg-signal.png',
    type: 'project'
  },
  {
    url: 'https://i.ibb.co/Kpp2WN5F/Screenshot-2025-11-30-230154.png',
    filename: 'wuzzuf-dashboard.png',
    type: 'project'
  }
];

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    
    protocol.get(url, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        return downloadImage(response.headers.location, filepath)
          .then(resolve)
          .catch(reject);
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(filepath);
      response.pipe(fileStream);
      
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`✅ Downloaded: ${path.basename(filepath)}`);
        resolve();
      });
      
      fileStream.on('error', (err) => {
        fs.unlink(filepath, () => {});
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function downloadAllImages() {
  console.log('📥 Starting image downloads...\n');
  
  for (const image of imagesToDownload) {
    const filepath = path.join(imagesDir, image.filename);
    
    // Skip if already exists
    if (fs.existsSync(filepath)) {
      console.log(`⏭️  Skipped (already exists): ${image.filename}`);
      continue;
    }
    
    try {
      await downloadImage(image.url, filepath);
    } catch (error) {
      console.error(`❌ Failed to download ${image.filename}:`, error.message);
    }
  }
  
  console.log('\n✨ Download complete!');
  console.log(`📁 Images saved to: ${imagesDir}`);
}

downloadAllImages();

