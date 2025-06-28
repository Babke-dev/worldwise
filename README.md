# 🌍 WorldWise

**WorldWise** is a travel tracking web app allowing users to mark, save, and explore places they've visited—or dream of visiting—using an interactive world map.

🔗 [Live Demo](https://worldwise-psi-five.vercel.app/)  
👤 Author: [Aleksandar Babić](https://www.linkedin.com/in/aleksandar-babic-88867830a/)

---

## 🚩 Core Features

### 🗺️ Interactive Map  
- Powered by **React Leaflet**, users can pan, zoom, and click the map  
- On click, a pop-up modal opens for adding visit details (city, country, date, personal notes)  
- Newly added markers appear instantly on the map  

### 📝 Visit List  
- Displays all added locations with city, country, date, and notes  
- Clicking a list entry recenters the map to that location  

### 🧭 Geolocation & Reverse-Geocoding  
- Users can optionally share their current location to center the map  
- The app uses **Nominatim** reverse-geocoding to translate coordinates into city + country info  

### 🗑️ Delete Visits  
- Entries can be removed both from the map and the visit list  

### 💾 Persistent Storage  
- Visit data is stored in **localStorage**, so it's preserved across page refreshes or browser restarts  

### ✅ Deep Linking  
- The app uses **React Router** for navigation between the landing page and the map app  




