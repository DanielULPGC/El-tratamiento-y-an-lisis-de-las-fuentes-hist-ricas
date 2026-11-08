/*
 * El laboratorio del historiador · escena 3D (Three.js 0.160.0)
 * Laboratorio circular: suelo con cuadrícula de excavación, mesa de análisis central con siete lámparas
 * (una por estación, se encienden al completarla) y siete puestos de trabajo con objetos propios.
 * Todo el modelado es procedimental: ningún objeto reproduce una pieza, obra o imagen concreta.
 */
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const RADIO = 10;
const css = (n) => getComputedStyle(document.documentElement).getPropertyValue(n).trim() || "#888";

export function crearEscena(contenedor, opciones) {
  const { estaciones, onSeleccion, onHover } = opciones;
  const reducido = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let pausa = reducido;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  contenedor.appendChild(renderer.domElement);
  try {
    const gl = renderer.getContext(), ext = gl.getExtension("WEBGL_debug_renderer_info");
    const nombre = ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : "";
    if (/swiftshader|llvmpipe|software/i.test(nombre)) { renderer.shadowMap.enabled = false; renderer.setPixelRatio(1); }
  } catch (e) { /* sin información */ }

  const escena = new THREE.Scene();
  const camara = new THREE.PerspectiveCamera(42, 1, 0.1, 200);
  camara.position.set(0, 21, 31);
  const controles = new OrbitControls(camara, renderer.domElement);
  controles.enableDamping = true;
  controles.dampingFactor = 0.08;
  controles.minDistance = 5;
  controles.maxDistance = 42;
  controles.maxPolarAngle = Math.PI * 0.47;
  controles.target.set(0, 1.4, 0);

  /* ---------- luz ---------- */
  const hemi = new THREE.HemisphereLight(0xfff6e8, 0x4a4033, 1.1);
  escena.add(hemi);
  const relleno = new THREE.DirectionalLight(0xe6eeff, 0.6);
  relleno.position.set(-10, 8, -12);
  escena.add(relleno);
  const sol = new THREE.DirectionalLight(0xfff0d8, 1.6);
  sol.position.set(8, 18, 10);
  sol.castShadow = true;
  sol.shadow.mapSize.set(2048, 2048);
  Object.assign(sol.shadow.camera, { left: -16, right: 16, top: 16, bottom: -16, near: 1, far: 50 });
  sol.shadow.bias = -0.0005;
  escena.add(sol);

  /* ---------- materiales dependientes del tema ---------- */
  const mat = {
    suelo: new THREE.MeshStandardMaterial({ roughness: 0.92 }),
    piedra: new THREE.MeshStandardMaterial({ roughness: 0.7 }),
    laton: new THREE.MeshStandardMaterial({ metalness: 0.75, roughness: 0.32 }),
    tinta: new THREE.MeshStandardMaterial({ roughness: 0.6 }),
    madera: new THREE.MeshStandardMaterial({ color: 0x8a5a33, roughness: 0.75 }),
    maderaClara: new THREE.MeshStandardMaterial({ color: 0xc19a6b, roughness: 0.8 }),
    papel: new THREE.MeshStandardMaterial({ color: 0xf1e7cf, roughness: 0.95 }),
    barro: new THREE.MeshStandardMaterial({ color: 0xb4643c, roughness: 0.85 }),
    arena: new THREE.MeshStandardMaterial({ color: 0xd9c08a, roughness: 1 }),
    mar: new THREE.MeshStandardMaterial({ roughness: 0.4, metalness: 0.1 }),
    vidrio: new THREE.MeshPhysicalMaterial({ roughness: 0.05, transmission: 0.6, transparent: true, opacity: 0.22, thickness: 0.2 })
  };

  /* ---------- suelo: cuadrícula de excavación ---------- */
  function texturaSuelo() {
    const c = document.createElement("canvas"); c.width = c.height = 2048;
    const g = c.getContext("2d");
    const cx = 1024, tinta = css("--sc-tinta"), dial = css("--sc-dial"), laton = css("--sc-laton");
    g.fillStyle = css("--sc-suelo"); g.fillRect(0, 0, 2048, 2048);
    // cuadrícula arqueológica dentro de un círculo
    g.save(); g.beginPath(); g.arc(cx, cx, 1000, 0, Math.PI * 2); g.clip();
    g.strokeStyle = dial; g.globalAlpha = 0.55; g.lineWidth = 2;
    for (let x = 64; x < 2048; x += 128) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, 2048); g.stroke(); g.beginPath(); g.moveTo(0, x); g.lineTo(2048, x); g.stroke(); }
    g.globalAlpha = 0.9; g.fillStyle = dial; g.font = "500 34px 'JetBrains Mono', monospace"; g.textAlign = "center"; g.textBaseline = "middle";
    const letras = "ABCDEFGHIJKLMNOP";
    for (let i = 0; i < 16; i++) { g.fillText(letras[i], 128 + i * 128, 96); g.fillText(String(i + 1), 96, 128 + i * 128); }
    g.restore();
    g.globalAlpha = 1;
    g.strokeStyle = dial; g.lineWidth = 6;
    [1000, 940, 330].forEach((r) => { g.beginPath(); g.arc(cx, cx, r, 0, Math.PI * 2); g.stroke(); });
    // rosa de los vientos y escala gráfica, como en un plano de excavación
    g.save(); g.translate(cx, cx);
    g.fillStyle = laton; g.globalAlpha = 0.85;
    for (let k = 0; k < 4; k++) { g.rotate(Math.PI / 2); g.beginPath(); g.moveTo(0, -300); g.lineTo(26, -40); g.lineTo(-26, -40); g.closePath(); g.fill(); }
    g.restore();
    g.fillStyle = tinta; g.font = "600 70px Cinzel, serif"; g.textAlign = "center"; g.fillText("N", cx, cx - 360);
    g.fillStyle = tinta; g.fillRect(1500, 1880, 300, 14); g.fillStyle = css("--sc-piedra"); g.fillRect(1575, 1880, 75, 14); g.fillRect(1725, 1880, 75, 14);
    g.fillStyle = tinta; g.font = "500 30px 'JetBrains Mono', monospace"; g.fillText("0", 1500, 1940); g.fillText("1 m", 1800, 1940);
    // siete sendas hacia los puestos
    g.strokeStyle = laton; g.lineWidth = 5; g.setLineDash([18, 22]);
    for (let i = 0; i < 7; i++) {
      const a = (i / 7) * Math.PI * 2;
      g.beginPath(); g.moveTo(cx + Math.sin(a) * 340, cx - Math.cos(a) * 340); g.lineTo(cx + Math.sin(a) * 520, cx - Math.cos(a) * 520); g.stroke();
    }
    g.setLineDash([]);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
    return t;
  }
  const suelo = new THREE.Mesh(new THREE.CircleGeometry(17, 96), mat.suelo);
  suelo.rotation.x = -Math.PI / 2; suelo.receiveShadow = true;
  escena.add(suelo);

  /* ---------- mesa de análisis central con siete lámparas ---------- */
  const mesa = new THREE.Group();
  const pie = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.7, 1.4, 32), mat.madera); pie.position.y = 0.7; pie.castShadow = true; mesa.add(pie);
  const tablero = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 2.4, 0.16, 64), mat.maderaClara); tablero.position.y = 1.48; tablero.castShadow = tablero.receiveShadow = true; mesa.add(tablero);
  const canto = new THREE.Mesh(new THREE.TorusGeometry(2.4, 0.05, 8, 128), mat.laton); canto.rotation.x = Math.PI / 2; canto.position.y = 1.56; mesa.add(canto);
  // pila de documentos y lupa grande en el centro
  for (let k = 0; k < 5; k++) {
    const hoja = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.025, 0.72), mat.papel);
    hoja.position.set((k % 2) * 0.04, 1.58 + k * 0.026, (k % 3) * 0.03); hoja.rotation.y = k * 0.13; hoja.castShadow = true; mesa.add(hoja);
  }
  const lupaC = new THREE.Group(); lupaC.position.set(0.15, 1.95, 0.1); mesa.add(lupaC);
  const aroC = new THREE.Mesh(new THREE.TorusGeometry(0.38, 0.04, 12, 64), mat.laton); aroC.rotation.x = Math.PI / 2; lupaC.add(aroC);
  const lenteC = new THREE.Mesh(new THREE.CylinderGeometry(0.37, 0.37, 0.02, 48), mat.vidrio); lupaC.add(lenteC);
  const mangoC = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, 0.7, 12), mat.madera); mangoC.rotation.z = Math.PI / 2; mangoC.position.x = 0.75; lupaC.add(mangoC);
  const lamparas = [];
  for (let i = 0; i < 7; i++) {
    const a = (i / 7) * Math.PI * 2;
    const grupo = new THREE.Group(); grupo.position.set(Math.sin(a) * 2.05, 1.56, -Math.cos(a) * 2.05); mesa.add(grupo);
    const vastago = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.04, 0.55, 8), mat.laton); vastago.position.y = 0.27; grupo.add(vastago);
    const pantalla = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.16, 20, 1, true), mat.laton); pantalla.position.y = 0.6; pantalla.rotation.x = Math.PI; grupo.add(pantalla);
    const m = new THREE.MeshStandardMaterial({ color: 0x5c564c, emissive: 0x000000, roughness: 0.3 });
    const bombilla = new THREE.Mesh(new THREE.SphereGeometry(0.09, 16, 10), m); bombilla.position.y = 0.52; grupo.add(bombilla);
    lamparas.push(bombilla);
  }
  escena.add(mesa);

  /* ---------- rótulos (sprites) ---------- */
  function rotulo(num, texto) {
    const c = document.createElement("canvas"); c.width = 640; c.height = 160;
    const g = c.getContext("2d");
    g.fillStyle = css("--surface"); g.strokeStyle = css("--sc-laton"); g.lineWidth = 6;
    g.beginPath(); g.roundRect(6, 6, 628, 148, 22); g.fill(); g.stroke();
    g.fillStyle = css("--sc-laton"); g.font = "700 72px Cinzel, serif"; g.textAlign = "center"; g.textBaseline = "middle";
    g.fillText(String(num), 70, 84);
    g.fillStyle = css("--sc-tinta"); g.font = "700 46px 'Atkinson Hyperlegible', sans-serif"; g.textAlign = "left";
    let t = texto; while (g.measureText(t).width > 500 && t.length > 4) t = t.slice(0, -2);
    if (t !== texto) t = t.trim() + "…";
    g.fillText(t, 124, 84);
    const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthWrite: false }));
    s.scale.set(3.2, 0.8, 1);
    return s;
  }
  // placa con texto sobre un plano
  function placa(texto, ancho = 1.0, alto = 0.22) {
    const c = document.createElement("canvas"); c.width = 512; c.height = Math.round(512 * alto / ancho);
    const g = c.getContext("2d");
    g.fillStyle = "#efe3c4"; g.fillRect(0, 0, c.width, c.height);
    g.strokeStyle = "#7f5c14"; g.lineWidth = 8; g.strokeRect(4, 4, c.width - 8, c.height - 8);
    g.fillStyle = "#2a231b"; g.font = `700 ${Math.round(c.height * 0.5)}px 'Atkinson Hyperlegible', sans-serif`; g.textAlign = "center"; g.textBaseline = "middle";
    g.fillText(texto, c.width / 2, c.height / 2 + 2);
    const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
    return new THREE.Mesh(new THREE.PlaneGeometry(ancho, alto), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.8 }));
  }

  /* ---------- puestos de trabajo ---------- */
  const pedestales = [];
  const animadores = [];
  const proyeccion = { discos: [], modo: "mercator" };
  const balanza = { cruz: null, platos: [], docs: [], estado: 0, angulo: 0 };
  const objetivoSel = [];

  estaciones.forEach((e, i) => {
    const a = (i / 7) * Math.PI * 2;
    const grupo = new THREE.Group();
    grupo.position.set(Math.sin(a) * RADIO, 0, -Math.cos(a) * RADIO);
    grupo.rotation.y = -a + Math.PI;
    const plinto = new THREE.Mesh(new THREE.CylinderGeometry(1.7, 1.85, 0.6, 48), mat.piedra.clone());
    plinto.position.y = 0.3; plinto.castShadow = plinto.receiveShadow = true;
    plinto.userData.estacion = i;
    grupo.add(plinto);
    const borde = new THREE.Mesh(new THREE.TorusGeometry(1.72, 0.04, 8, 96), mat.laton);
    borde.rotation.x = Math.PI / 2; borde.position.y = 0.61; grupo.add(borde);
    const obj = new THREE.Group(); obj.position.y = 0.6; grupo.add(obj);
    const constructor = [lupaHuella, bandejas, vitrina, atrilMagnetofono, caballeteMapa, balanzaPruebas, cajaTiempo][i];
    constructor(obj);
    obj.traverse((m) => { if (m.isMesh) { m.castShadow = true; m.userData.estacion = i; } });
    const r = rotulo(e.num, e.titulo); r.position.y = 4.1; grupo.add(r);
    escena.add(grupo);
    pedestales.push({ grupo, plinto, angulo: a });
    objetivoSel.push(plinto); obj.traverse((m) => { if (m.isMesh) objetivoSel.push(m); });
  });

  /* 1 · bandeja de arena con huellas y lupa */
  function lupaHuella(g) {
    const caja = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.22, 1.7), mat.madera); caja.position.y = 0.11; g.add(caja);
    const arena = new THREE.Mesh(new THREE.BoxGeometry(2.24, 0.04, 1.54), mat.arena); arena.position.y = 0.23; g.add(arena);
    const huellaM = new THREE.MeshStandardMaterial({ color: 0x8c7246, roughness: 1 });
    // huellas de calzado: suela y tacón, en una pista que cruza la bandeja
    [[-0.8, 0.25, 0.25], [-0.4, -0.12, 0.25], [0.0, 0.25, 0.25], [0.4, -0.12, 0.25]].forEach(([x, z, r]) => {
      const suela = new THREE.Mesh(new THREE.CircleGeometry(0.1, 24), huellaM); suela.scale.set(1, 1.5, 1); suela.rotation.set(-Math.PI / 2, 0, r); suela.position.set(x, 0.256, z); g.add(suela);
      const tacon = new THREE.Mesh(new THREE.CircleGeometry(0.07, 20), huellaM); tacon.rotation.x = -Math.PI / 2; tacon.position.set(x - Math.sin(r) * 0.22, 0.256, z + Math.cos(r) * 0.22); g.add(tacon);
    });
    // fragmento semienterrado y pincel
    const frag = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.05, 20, 1, true, 0, 1.4), mat.barro); frag.position.set(0.85, 0.27, 0.5); frag.rotation.z = 0.2; g.add(frag);
    const pincel = new THREE.Group(); pincel.position.set(-0.95, 0.3, -0.5); pincel.rotation.y = 0.6; g.add(pincel);
    const astil = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.6, 8), mat.madera); astil.rotation.z = Math.PI / 2; pincel.add(astil);
    const cerdas = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.16, 10), mat.tinta); cerdas.rotation.z = Math.PI / 2; cerdas.position.x = 0.36; pincel.add(cerdas);
    const lupa = new THREE.Group(); lupa.position.y = 1.0; g.add(lupa);
    const aro = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.045, 12, 64), mat.laton); aro.rotation.x = Math.PI / 2; lupa.add(aro);
    const lente = new THREE.Mesh(new THREE.CylinderGeometry(0.41, 0.41, 0.02, 48), mat.vidrio); lupa.add(lente);
    const mango = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.065, 0.8, 12), mat.madera); mango.rotation.z = Math.PI / 2; mango.position.x = 0.85; lupa.add(mango);
    animadores.push((t) => { lupa.position.x = Math.sin(t * 0.35) * 0.6; lupa.position.z = Math.cos(t * 0.27) * 0.3; lupa.position.y = 0.95 + Math.sin(t * 0.8) * 0.05; lupa.rotation.y = Math.sin(t * 0.2) * 0.5; });
  }

  /* 2 · tres bandejas: primaria, secundaria, terciaria */
  function bandejas(g) {
    const etiquetas = ["PRIMARIA", "SECUNDARIA", "TERCIARIA"];
    etiquetas.forEach((et, k) => {
      const b = new THREE.Group(); b.position.set(-1.0 + k * 1.0, 0, 0); g.add(b);
      const pata = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.35 + k * 0.4, 8), mat.laton); pata.position.y = (0.35 + k * 0.4) / 2; b.add(pata);
      const y = 0.35 + k * 0.4;
      const fondo = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.04, 1.0), mat.maderaClara); fondo.position.y = y; b.add(fondo);
      [[0, 0.48, 0.9, 0.02], [0, -0.48, 0.9, 0.02]].forEach(([x, z, w, d]) => { const r = new THREE.Mesh(new THREE.BoxGeometry(w, 0.1, d + 0.02), mat.madera); r.position.set(x, y + 0.05, z); b.add(r); });
      [-0.44, 0.44].forEach((x) => { const r = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.1, 1.0), mat.madera); r.position.set(x, y + 0.05, 0); b.add(r); });
      if (k === 0) { // rollo y vasija: testimonio y vestigio
        const rollo = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.6, 16), mat.papel); rollo.rotation.z = Math.PI / 2; rollo.position.set(0, y + 0.1, -0.2); b.add(rollo);
        const pts = []; for (let j = 0; j <= 12; j++) { const v = j / 12; pts.push(new THREE.Vector2(0.06 + Math.sin(v * Math.PI) * 0.1, v * 0.32)); }
        const vas = new THREE.Mesh(new THREE.LatheGeometry(pts, 24), mat.barro); vas.position.set(0, y + 0.02, 0.22); b.add(vas);
      }
      if (k === 1) { // libros: interpretación posterior
        [0x6b2f2a, 0x2c5b4d, 0x3d4f73].forEach((c, j) => { const l = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.08, 0.4), new THREE.MeshStandardMaterial({ color: c, roughness: 0.7 })); l.position.set(0, y + 0.06 + j * 0.085, 0); l.rotation.y = j * 0.15; b.add(l); });
      }
      if (k === 2) { // fichero: organiza las fuentes
        const fichero = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.3, 0.7), mat.madera); fichero.position.set(0, y + 0.17, 0); b.add(fichero);
        for (let j = 0; j < 7; j++) { const f = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.22, 0.01), mat.papel); f.position.set(0, y + 0.36, -0.27 + j * 0.09); b.add(f); }
      }
      const p = placa(et, 0.8, 0.16); p.position.set(0, y - 0.02, 0.53); b.add(p);
    });
  }

  /* 3 · vitrina con vasija decorada y fragmentos */
  function vitrina(g) {
    const zocalo = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.5, 1.4), mat.madera); zocalo.position.y = 0.25; g.add(zocalo);
    const caja = new THREE.Mesh(new THREE.BoxGeometry(1.7, 1.7, 1.3), mat.vidrio); caja.position.y = 1.35; g.add(caja);
    [[-0.85, -0.65], [0.85, -0.65], [-0.85, 0.65], [0.85, 0.65]].forEach(([x, z]) => { const a = new THREE.Mesh(new THREE.BoxGeometry(0.04, 1.7, 0.04), mat.laton); a.position.set(x, 1.35, z); g.add(a); });
    const techo = new THREE.Mesh(new THREE.BoxGeometry(1.76, 0.05, 1.36), mat.laton); techo.position.y = 2.22; g.add(techo);
    // textura de bandas geométricas genéricas (no reproduce ninguna pieza)
    const c = document.createElement("canvas"); c.width = 512; c.height = 256; const x = c.getContext("2d");
    x.fillStyle = "#b4643c"; x.fillRect(0, 0, 512, 256);
    x.fillStyle = "#2a1a12"; x.fillRect(0, 70, 512, 10); x.fillRect(0, 176, 512, 10);
    for (let k = 0; k < 16; k++) { const x0 = k * 32; x.fillRect(x0, 96, 22, 6); x.fillRect(x0 + 16, 96, 6, 50); x.fillRect(x0 + 4, 140, 18, 6); x.fillRect(x0 + 4, 116, 6, 30); }
    x.fillRect(0, 210, 512, 4);
    const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace; tex.wrapS = THREE.RepeatWrapping;
    const pts = []; const perfil = [[0.18, 0], [0.32, 0.12], [0.42, 0.4], [0.38, 0.65], [0.2, 0.85], [0.17, 0.95], [0.24, 1.02]];
    for (let j = 0; j < perfil.length - 1; j++) for (let s = 0; s < 4; s++) { const k = s / 4, A = perfil[j], B = perfil[j + 1]; pts.push(new THREE.Vector2(A[0] + (B[0] - A[0]) * k, A[1] + (B[1] - A[1]) * k)); }
    pts.push(new THREE.Vector2(0.24, 1.02));
    const vasija = new THREE.Mesh(new THREE.LatheGeometry(pts, 48), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.8, side: THREE.DoubleSide }));
    vasija.position.y = 0.55; g.add(vasija);
    const peana = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.3, 0.05, 24), mat.piedra); peana.position.y = 0.525; g.add(peana);
    [[0.55, 0.3, 0.4], [-0.55, 0.25, 1.9], [0.45, -0.35, 3.3]].forEach(([fx, fz, rot]) => {
      const f = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.12, 16, 1, true, rot, 1.1), mat.barro); f.material = mat.barro; f.position.set(fx, 0.56, fz); f.rotation.x = Math.PI / 2; g.add(f);
    });
    animadores.push((t) => { vasija.rotation.y = t * 0.25; });
  }

  /* 4 · atril con códice abierto y magnetófono de bobinas */
  function atrilMagnetofono(g) {
    const atril = new THREE.Group(); atril.position.set(-0.75, 0, 0); g.add(atril);
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.07, 1.3, 10), mat.madera); col.position.y = 0.65; atril.add(col);
    const tabla = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.04, 0.7), mat.madera); tabla.position.y = 1.35; tabla.rotation.x = 0.5; atril.add(tabla);
    const c = document.createElement("canvas"); c.width = 512; c.height = 360; const x = c.getContext("2d");
    x.fillStyle = "#f1e7cf"; x.fillRect(0, 0, 512, 360); x.fillStyle = "#3b2f22";
    for (let p = 0; p < 2; p++) for (let l = 0; l < 14; l++) { const w = 180 - (l % 4) * 18; x.fillRect(32 + p * 256, 40 + l * 21, w, 5); }
    x.fillStyle = "#8b2a1e"; x.fillRect(32, 40, 26, 26); x.fillRect(288, 40, 26, 26);
    x.fillStyle = "#c8b88f"; x.fillRect(254, 0, 4, 360);
    const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
    const libro = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.03, 0.62), [mat.papel, mat.papel, new THREE.MeshStandardMaterial({ map: tex, roughness: 0.9 }), mat.madera, mat.papel, mat.papel]);
    libro.position.y = 1.39; libro.position.z = -0.02; libro.rotation.x = 0.5; atril.add(libro);
    const mag = new THREE.Group(); mag.position.set(0.75, 0, 0.1); g.add(mag);
    const mesita = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.6, 0.8), mat.madera); mesita.position.y = 0.3; mag.add(mesita);
    const cuerpo = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.18, 0.62), mat.tinta); cuerpo.position.y = 0.69; mag.add(cuerpo);
    const panel = new THREE.Mesh(new THREE.BoxGeometry(0.88, 0.01, 0.6), new THREE.MeshStandardMaterial({ color: 0x9a9a90, metalness: 0.6, roughness: 0.4 })); panel.position.y = 0.785; mag.add(panel);
    const bobinas = [];
    [-0.22, 0.22].forEach((bx) => {
      const b = new THREE.Group(); b.position.set(bx, 0.83, -0.05); mag.add(b);
      const disco = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.02, 32), mat.laton); b.add(disco);
      const cinta = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.025, 32), new THREE.MeshStandardMaterial({ color: 0x4a2c1a, roughness: 0.5 })); cinta.position.y = 0.012; b.add(cinta);
      for (let k = 0; k < 3; k++) { const r = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.03, 0.03), mat.tinta); r.rotation.y = k * Math.PI / 3; r.position.y = 0.02; b.add(r); }
      bobinas.push(b);
    });
    [-0.3, -0.15, 0, 0.15].forEach((kx) => { const tecla = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.04, 0.08), mat.piedra); tecla.position.set(kx, 0.8, 0.23); mag.add(tecla); });
    const micro = new THREE.Group(); micro.position.set(0.42, 0.6, 0.3); mag.add(micro);
    const pieM = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.45, 8), mat.laton); pieM.position.y = 0.22; micro.add(pieM);
    const cab = new THREE.Mesh(new THREE.SphereGeometry(0.06, 16, 10), mat.tinta); cab.position.y = 0.48; micro.add(cab);
    animadores.push((t) => { bobinas[0].rotation.y = -t * 1.6; bobinas[1].rotation.y = -t * 1.6; });
  }

  /* 5 · caballete con secuencia de viñetas y tablero de proporciones del mapamundi */
  function caballeteMapa(g) {
    const cab = new THREE.Group(); cab.position.set(-0.75, 0, -0.1); g.add(cab);
    [[-0.35, 0.15], [0.35, 0.15], [0, -0.4]].forEach(([px, pz], k) => {
      const pata = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.03, 2.2, 8), mat.madera);
      pata.position.set(px * 0.6, 1.05, pz * 0.6); pata.rotation.set(k === 2 ? 0.25 : -0.12, 0, px * -0.25); cab.add(pata);
    });
    // lienzo con una secuencia genérica de seis viñetas (bloques de color, sin figuras)
    const c = document.createElement("canvas"); c.width = 600; c.height = 420; const x = c.getContext("2d");
    x.fillStyle = "#efe3c4"; x.fillRect(0, 0, 600, 420);
    const tonos = ["#8c6a45", "#5b6b4f", "#a3734a", "#6c5a7a", "#7f8f6a", "#b08a4a"];
    for (let k = 0; k < 6; k++) { const cx = 20 + (k % 3) * 193, cy = 20 + Math.floor(k / 3) * 200; x.fillStyle = tonos[k]; x.fillRect(cx, cy, 177, 182); x.fillStyle = "rgba(255,255,255,.35)"; x.fillRect(cx, cy + 120, 177, 62); x.strokeStyle = "#2a231b"; x.lineWidth = 4; x.strokeRect(cx, cy, 177, 182); x.fillStyle = "#2a231b"; x.font = "700 30px 'JetBrains Mono', monospace"; x.fillText(String(k + 1), cx + 10, cy + 36); }
    const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
    const lienzo = new THREE.Mesh(new THREE.BoxGeometry(1.15, 0.8, 0.03), [mat.madera, mat.madera, mat.madera, mat.madera, new THREE.MeshStandardMaterial({ map: tex, roughness: 0.9 }), mat.madera]);
    lienzo.position.set(0, 1.55, 0.12); lienzo.rotation.x = -0.12; cab.add(lienzo);
    const repisa = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.05, 0.12), mat.madera); repisa.position.set(0, 1.12, 0.17); cab.add(repisa);
    // globo terráqueo
    const globo = new THREE.Group(); globo.position.set(0.85, 0, -0.45); g.add(globo);
    const basG = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.25, 0.1, 24), mat.madera); basG.position.y = 0.05; globo.add(basG);
    const ejeG = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.5, 8), mat.laton); ejeG.position.y = 0.32; globo.add(ejeG);
    const esfera = new THREE.Mesh(new THREE.SphereGeometry(0.38, 32, 16), mat.mar); esfera.position.y = 0.95; esfera.rotation.z = 0.41; globo.add(esfera);
    const meridiano = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.015, 8, 64, Math.PI * 1.4), mat.laton); meridiano.position.y = 0.95; meridiano.rotation.set(0, Math.PI / 2, -Math.PI * 0.2); globo.add(meridiano);
    // tablero de proporciones: dos discos (Groenlandia, América del Sur)
    const tab = new THREE.Group(); tab.position.set(0.8, 0, 0.6); g.add(tab);
    const tabla = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.06, 0.75), mat.papel); tabla.position.y = 0.45; tab.add(tabla);
    const pieT = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.05, 0.42, 8), mat.madera); pieT.position.y = 0.21; tab.add(pieT);
    [[-0.22, 0xe9eef2], [0.2, 0x5e8a4c]].forEach(([dx, col]) => {
      const d = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 0.03, 40), new THREE.MeshStandardMaterial({ color: col, roughness: 0.7 }));
      d.position.set(dx, 0.5, 0); tab.add(d); proyeccion.discos.push(d);
    });
    colocarProyeccion(true);
    let previo = performance.now();
    animadores.push((t) => {
      esfera.rotation.y = t * 0.3;
      const ahora = performance.now(), k = 1 - Math.exp(-((ahora - previo) / 1000) * 5); previo = ahora;
      proyeccion.discos.forEach((d) => { const s = d.scale.x + (d.userData.obj - d.scale.x) * k; d.scale.set(s, 1, s); });
    });
  }
  function colocarProyeccion(inmediato) {
    // radio proporcional a la raíz del área aparente; con «áreas reales», América del Sur ≈ 8,2 veces Groenlandia
    const [gr, sa] = proyeccion.discos;
    if (!gr) return;
    const rGr = proyeccion.modo === "mercator" ? 0.19 : 0.066, rSa = 0.19;
    gr.userData.obj = rGr; sa.userData.obj = rSa;
    if (inmediato) { gr.scale.set(rGr, 1, rGr); sa.scale.set(rSa, 1, rSa); }
  }

  /* 6 · balanza de pruebas */
  function balanzaPruebas(g) {
    const base = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.12, 0.6), mat.madera); base.position.y = 0.06; g.add(base);
    const colum = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.09, 1.7, 16), mat.laton); colum.position.y = 0.95; g.add(colum);
    const remate = new THREE.Mesh(new THREE.SphereGeometry(0.09, 16, 10), mat.laton); remate.position.y = 1.85; g.add(remate);
    const cruz = new THREE.Group(); cruz.position.y = 1.78; g.add(cruz);
    const brazo = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.05, 0.06), mat.laton); cruz.add(brazo);
    const fiel = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.3, 8), mat.tinta); fiel.position.y = 0.17; cruz.add(fiel);
    balanza.cruz = cruz; balanza.brazoMat = brazo.material;
    [-1.05, 1.05].forEach((px, k) => {
      const plato = new THREE.Group(); g.add(plato);
      const hilos = [];
      for (let j = 0; j < 3; j++) { const hilo = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.8, 4), mat.laton); const a = (j / 3) * Math.PI * 2; hilo.position.set(Math.cos(a) * 0.18, 0.4, Math.sin(a) * 0.18); hilo.rotation.set(Math.sin(a) * 0.22, 0, -Math.cos(a) * 0.22); plato.add(hilo); hilos.push(hilo); }
      const disco = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.38, 0.05, 32), mat.laton); plato.add(disco);
      const docs = [];
      for (let j = 0; j < 2; j++) { const d = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.03, 0.3), mat.papel); d.position.set(0, 0.04 + j * 0.035, 0); d.rotation.y = j * 0.4 + k; plato.add(d); docs.push(d); }
      balanza.platos.push({ plato, x: px }); balanza.docs.push(docs);
    });
    aplicarBalanza();
    animadores.push((t) => {
      const obj = balanza.objetivo + (balanza.estado === 0 ? Math.sin(t * 1.4) * 0.015 : 0);
      balanza.angulo += (obj - balanza.angulo) * 0.06;
      balanza.cruz.rotation.z = balanza.angulo;
      balanza.platos.forEach(({ plato, x }) => { plato.position.set(Math.cos(balanza.angulo) * x, 1.78 + Math.sin(balanza.angulo) * x - 0.82, 0); });
    });
  }
  function aplicarBalanza() {
    // 0: una fuente (inclinación leve); 1: dos coinciden (el plato izquierdo baja); 2: se contradicen (equilibrio inestable, brazo resaltado)
    const n = balanza.estado;
    const vis = [[true, false, false, false], [true, true, false, false], [true, false, true, false]][n];
    balanza.docs[0][0].visible = vis[0]; balanza.docs[0][1].visible = vis[1]; balanza.docs[1][0].visible = vis[2]; balanza.docs[1][1].visible = vis[3];
    balanza.objetivo = [0.06, 0.2, 0][n];
    if (balanza.brazoMat) { balanza.brazoMat.emissive = new THREE.Color(n === 2 ? css("--sc-laton") : "#000000"); balanza.brazoMat.emissiveIntensity = n === 2 ? 0.3 : 0; }
  }

  /* 7 · caja del tiempo y línea de cuerda con tarjetas */
  function cajaTiempo(g) {
    const arcon = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.55, 0.7), mat.madera); arcon.position.set(-0.6, 0.28, 0.25); g.add(arcon);
    const interior = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.02, 0.6), mat.tinta); interior.position.set(-0.6, 0.54, 0.25); g.add(interior);
    const tapa = new THREE.Group(); tapa.position.set(-0.6, 0.56, -0.1); g.add(tapa);
    const tapaM = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.06, 0.7), mat.madera); tapaM.position.set(0, 0, 0.35); tapa.add(tapaM);
    tapa.rotation.x = -1.9;
    [[-0.85, 0.62, 0.15, 0xc9a24a, "s"], [-0.6, 0.64, 0.32, 0x9a9a90, "c"], [-0.35, 0.62, 0.2, 0x7a4a2a, "b"]].forEach(([ox, oy, oz, col, tipo]) => {
      const m = new THREE.MeshStandardMaterial({ color: col, roughness: 0.5, metalness: tipo === "c" ? 0.6 : 0.1 });
      const o = new THREE.Mesh(tipo === "s" ? new THREE.SphereGeometry(0.09, 16, 10) : tipo === "c" ? new THREE.CylinderGeometry(0.09, 0.09, 0.03, 20) : new THREE.BoxGeometry(0.18, 0.1, 0.12), m);
      o.position.set(ox, oy, oz); g.add(o);
    });
    // línea del tiempo de cuerda con tarjetas (de más antigua a más reciente)
    [-0.1, 1.5].forEach((px) => { const poste = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.035, 1.5, 8), mat.madera); poste.position.set(px, 0.75, -0.45); g.add(poste); });
    const cuerda = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 1.6, 6), mat.tinta); cuerda.rotation.z = Math.PI / 2; cuerda.position.set(0.7, 1.42, -0.45); g.add(cuerda);
    const tonos = [0xd9c27a, 0xd8a25c, 0xcf7f5a, 0xb7697a, 0x8a6aa0];
    const tarjetas = [];
    tonos.forEach((c, k) => {
      const t = new THREE.Group(); t.position.set(0.1 + k * 0.3, 1.42, -0.45); g.add(t);
      const pinza = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.08, 0.03), mat.maderaClara); pinza.position.y = -0.02; t.add(pinza);
      const tj = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.28, 0.01), new THREE.MeshStandardMaterial({ color: c, roughness: 0.8 })); tj.position.y = -0.2; t.add(tj);
      tarjetas.push(t);
    });
    animadores.push((t) => { tarjetas.forEach((tj, k) => { tj.rotation.x = Math.sin(t * 1.1 + k * 0.7) * 0.12; }); });
  }

  /* ---------- interacción ---------- */
  const ray = new THREE.Raycaster(), ptr = new THREE.Vector2();
  let hoverIdx = -1, abajo = null;
  function estacionBajo(ev) {
    const r = renderer.domElement.getBoundingClientRect();
    ptr.x = ((ev.clientX - r.left) / r.width) * 2 - 1; ptr.y = -((ev.clientY - r.top) / r.height) * 2 + 1;
    ray.setFromCamera(ptr, camara);
    const hit = ray.intersectObjects(objetivoSel, false)[0];
    return hit ? hit.object.userData.estacion : -1;
  }
  renderer.domElement.addEventListener("pointermove", (ev) => {
    const i = estacionBajo(ev);
    if (i !== hoverIdx) {
      if (hoverIdx >= 0) pedestales[hoverIdx].plinto.material.emissive.setHex(0x000000);
      hoverIdx = i;
      if (i >= 0) pedestales[i].plinto.material.emissive.setHex(0x1a2a28);
      renderer.domElement.style.cursor = i >= 0 ? "pointer" : "grab";
    }
    if (onHover) onHover(i, ev);
  });
  renderer.domElement.addEventListener("pointerleave", () => { if (onHover) onHover(-1); });
  renderer.domElement.addEventListener("pointerdown", (ev) => { abajo = { x: ev.clientX, y: ev.clientY }; });
  renderer.domElement.addEventListener("pointerup", (ev) => {
    if (!abajo) return;
    const mov = Math.hypot(ev.clientX - abajo.x, ev.clientY - abajo.y); abajo = null;
    if (mov > 6) return;
    const i = estacionBajo(ev);
    if (i >= 0 && onSeleccion) onSeleccion(i);
  });

  /* ---------- cámara animada ---------- */
  let vuelo = null;
  function volar(pos, objetivo, dur = 1.3) {
    if (reducido) { camara.position.copy(pos); controles.target.copy(objetivo); return; }
    vuelo = { p0: camara.position.clone(), t0: controles.target.clone(), p1: pos, t1: objetivo, ini: performance.now(), dur: dur * 1000 };
  }
  function irA(i) {
    const { angulo } = pedestales[i];
    const dir = new THREE.Vector3(Math.sin(angulo), 0, -Math.cos(angulo));
    const objetivo = dir.clone().multiplyScalar(RADIO).add(new THREE.Vector3(0, 1.6, 0));
    const pos = dir.clone().multiplyScalar(RADIO + 9.5).add(new THREE.Vector3(0, 5.6, 0));
    volar(pos, objetivo);
  }
  function vistaGeneral() { volar(new THREE.Vector3(0, 21, 31), new THREE.Vector3(0, 1.4, 0)); }

  /* ---------- tema ---------- */
  function aplicarTema() {
    escena.background = new THREE.Color(css("--sc-fondo"));
    escena.fog = new THREE.Fog(new THREE.Color(css("--sc-fondo")), 34, 70);
    mat.piedra.color.set(css("--sc-piedra"));
    pedestales.forEach((p) => p.plinto.material.color.set(css("--sc-piedra")));
    mat.laton.color.set(css("--sc-laton"));
    mat.tinta.color.set(css("--sc-tinta"));
    mat.mar.color.set(css("--sc-mar"));
    if (mat.suelo.map) mat.suelo.map.dispose();
    mat.suelo.map = texturaSuelo(); mat.suelo.color.set(0xffffff); mat.suelo.needsUpdate = true;
    const oscuro = matchMedia("(prefers-color-scheme: dark)").matches && document.documentElement.getAttribute("data-theme") !== "light" || document.documentElement.getAttribute("data-theme") === "dark";
    hemi.intensity = oscuro ? 0.75 : 1.1; sol.intensity = oscuro ? 1.2 : 1.6;
  }
  aplicarTema();

  /* ---------- bucle ---------- */
  const reloj = new THREE.Clock();
  let tAnim = 0;
  function tamano() {
    const w = contenedor.clientWidth || 1, h = contenedor.clientHeight || 1;
    renderer.setSize(w, h, false); camara.aspect = w / h; camara.updateProjectionMatrix();
  }
  new ResizeObserver(tamano).observe(contenedor); tamano();
  function bucle() {
    const dt = Math.min(reloj.getDelta(), 0.05);
    if (!pausa) tAnim += dt;
    animadores.forEach((f) => f(tAnim));
    lupaC.rotation.y = Math.sin(tAnim * 0.3) * 0.4;
    lamparas.forEach((l, i) => { if (l.userData.on) l.material.emissiveIntensity = 0.75 + Math.sin(tAnim * 2 + i) * 0.08; });
    if (vuelo) {
      let k = (performance.now() - vuelo.ini) / vuelo.dur; if (k >= 1) k = 1;
      const e = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
      camara.position.lerpVectors(vuelo.p0, vuelo.p1, e); controles.target.lerpVectors(vuelo.t0, vuelo.t1, e);
      if (k === 1) vuelo = null;
    }
    controles.update();
    renderer.render(escena, camara);
    requestAnimationFrame(bucle);
  }
  bucle();

  return {
    irA, vistaGeneral,
    proyectar(i) {
      const v = pedestales[i].grupo.position.clone().add(new THREE.Vector3(0, 4.6, 0)).project(camara);
      const r = renderer.domElement.getBoundingClientRect();
      return { x: (v.x * 0.5 + 0.5) * r.width, y: (-v.y * 0.5 + 0.5) * r.height, visible: v.z < 1 };
    },
    marcarResueltas(lista) {
      lista.forEach((on, i) => {
        const m = lamparas[i].material; lamparas[i].userData.on = on;
        m.color.set(on ? "#fff1c4" : "#5c564c");
        m.emissive.set(on ? "#ffcf6a" : "#000000"); m.emissiveIntensity = on ? 0.8 : 0;
      });
    },
    setPausa(v) { pausa = v; },
    getPausa() { return pausa; },
    setProyeccion(modo) { proyeccion.modo = modo; colocarProyeccion(false); },
    setBalanza(n) { balanza.estado = n; aplicarBalanza(); },
    aplicarTema
  };
}
