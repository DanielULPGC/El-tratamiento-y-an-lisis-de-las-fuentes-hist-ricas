/*
 * El laboratorio del historiador · contenido de las siete estaciones
 * Redacción propia a partir de las fuentes base (presentación del tema 4, Cooper, Comes) y de la
 * investigación citada en datos/referencias.js. Las citas literales son breves y se atribuyen.
 *
 * Esquema de estación:
 *   id, num, titulo, sub, lema, idea, prediccion{q, o[]}, sintesis[], conceptos[{t,d}], cita{texto, fuente},
 *   matices[{t,d}], aula[], docente{duracion, dinamica, preguntas[]}, refs[], retos[]
 * Tipos de reto: clasificar · ordenar · test · numerico (ver js/retos.js).
 */
window.ESTACIONES = [

/* ===================================================================== 1 */
{
  id: "e1", num: 1,
  titulo: "La lupa y la huella",
  sub: "Qué es una fuente: huella, pregunta y evidencia",
  lema: "¿Cuándo se convierte un resto del pasado en una prueba?",
  idea: "Una fuente es el origen de una información sobre el pasado. Solo se convierte en evidencia cuando alguien le hace una pregunta y razona qué permite afirmar y qué no.",
  prediccion: {
    q: "Antes de empezar: una fotografía antigua encontrada en un cajón, ¿es ya una prueba histórica?",
    o: ["Sí, siempre lo es", "Lo es cuando se usa para responder una pregunta", "No: las fotografías no son fuentes"]
  },
  sintesis: [
    "La presentación del tema define la fuente como «el origen de una información», el documento que aporta información para el estudio de un tema. Cooper precisa de qué está hecha esa información: los historiadores descubren el pasado haciendo preguntas a las huellas que siguen en pie, como edificios, lugares, cuadros, objetos y fuentes escritas. La lista se ha ido ampliando: a los documentos políticos del siglo XIX se sumaron en el XX la arqueología, la cartografía, las canciones y los juegos infantiles, los refranes, la historia oral, los topónimos y la estadística.",
    "Las fuentes no hablan solas. Siguiendo a <strong>Collingwood</strong>, Cooper presenta la investigación como una serie ordenada de preguntas: ¿cómo se hizo?, ¿por qué?, ¿para qué se usaba?, ¿quién lo usaba?, ¿dónde se encontró?, ¿hay otros? Didácticamente conviene distinguir la <em>fuente</em> (la huella) de la <em>evidencia</em> (la fuente puesta al servicio de una pregunta) y de la <em>interpretación</em> (la explicación que se construye con varias evidencias).",
    "No todo lo que se saca de una fuente es igual de seguro. Una <strong>deducción</strong> parte de una premisa firme («son topónimos sajones; luego hubo asentamiento sajón»). Pero las fuentes suelen estar incompletas y su categoría puede ser incierta: un colgante hallado en una tumba ¿era un adorno o un objeto ritual? Por eso, advierte Cooper, las <strong>inferencias</strong>, suposiciones razonables, son más frecuentes que las deducciones. Una inferencia es válida si se apoya en argumentos y concuerda con lo que se sabe del período, y a menudo caben varias igualmente válidas.",
    "La presentación subraya que el estudio de las fuentes acerca al alumnado al método científico del conocimiento del pasado. En el aula eso se traduce en tres registros que hay que separar y nombrar: lo que <em>veo</em> (dato), lo que <em>pienso</em> (inferencia) y lo que <em>sé con seguridad</em> (certeza). El lenguaje modalizado (<em>quizá</em>, <em>es probable</em>, <em>todavía no podemos saberlo</em>) es contenido de aprendizaje, no un adorno.",
    "Arias Ferrer y Egea llaman a este aprendizaje <strong>alfabetización histórica</strong>, siguiendo a Nokes: construir argumentos a partir del análisis crítico de fuentes de todo tipo (textuales, iconográficas, audiovisuales, objetuales, orales, estadísticas, gráficas y cartográficas). Recuerdan los pasos del método del historiador (plantear el problema, formular una hipótesis, documentarse, analizar y evaluar las fuentes, contrastar la hipótesis y redactar conclusiones), pero advierten que la escuela no forma historiadores, sino ciudadanía capaz de cuestionar la información: el método escolar debe adaptarse a esa finalidad y a la edad del alumnado."
  ],
  conceptos: [
    { t: "Fuente histórica", d: "Origen de una información sobre el pasado: cualquier huella material, escrita, oral, visual o digital cuya procedencia y contexto pueden examinarse." },
    { t: "Huella", d: "Resto del pasado que permanece en el presente (un edificio, un objeto, un escrito, un recuerdo)." },
    { t: "Evidencia", d: "Fuente usada para responder a una pregunta concreta, razonando qué permite afirmar y qué no." },
    { t: "Deducción", d: "Conclusión que se sigue necesariamente de una premisa segura." },
    { t: "Inferencia", d: "Suposición razonable a partir de una fuente; válida si se argumenta y concuerda con lo que se sabe del período. Puede haber varias." },
    { t: "Imaginación histórica", d: "Capacidad de formular varias suposiciones válidas sobre las pruebas y elegir con perspicacia entre ellas (Lee, citado por Cooper)." }
  ],
  cita: { texto: "Los historiadores descubren el pasado a partir de las fuentes, huellas del pasado que permanecen.", fuente: "Cooper (2002, p. 115)" },
  matices: [
    { t: "Fuente no es sinónimo de verdad", d: "Una fuente informa siempre de algo, pero no necesariamente de lo que dice. Un relato exagerado es mala fuente sobre lo ocurrido y buena fuente sobre cómo se contaba." },
    { t: "Origen y uso", d: "La definición de la presentación se centra en el origen de la información. La didáctica añade el uso: una misma pieza puede ser fuente para unas preguntas y no para otras." }
  ],
  aula: [
    "1.er ciclo: «El misterio de la mochila». Una mochila ficticia con cinco o seis objetos inocuos (billete, entrada de museo, plano, lápiz) y tres columnas: veo, pienso, me pregunto.",
    "2.º ciclo: caja de objetos con un guion fijo de preguntas (de qué está hecho, para qué se usaba, quién lo usaría, qué más quiero saber).",
    "3.er ciclo: separar en una tabla lo deducido, lo inferido y lo que no puede saberse a partir de las pistas de un yacimiento o de un plano antiguo."
  ],
  docente: {
    duracion: "20-25 minutos",
    dinamica: "Mostrar un objeto real sin explicarlo y pedir tres frases: una que empiece por «veo», otra por «pienso» y otra por «me pregunto». Volver a la predicción al final.",
    preguntas: [
      "¿Por qué no basta con «tener muchas fuentes» para aprender historia?",
      "¿Qué cambia en la enseñanza si se acepta que puede haber varias inferencias válidas?"
    ]
  },
  refs: ["tema4", "cooper2002", "arias2022", "collingwood1946", "seixas2013"],
  retos: [
    {
      id: "e1-r1", tipo: "clasificar", titulo: "¿Veo, pienso o invento?",
      consigna: "Sobre una vasija de barro hallada en una cueva, clasifica cada afirmación.",
      categorias: ["Observación (dato)", "Inferencia razonable", "Especulación sin base"],
      items: [
        { t: "La vasija tiene el borde roto y hollín en la base.", c: 0, e: "Se describe lo que se ve, sin interpretar." },
        { t: "Probablemente se usó para cocinar al fuego.", c: 1, e: "El hollín apoya la hipótesis; el «probablemente» la gradúa." },
        { t: "La hizo una mujer que se llamaba Ana.", c: 2, e: "Nada en la pieza permite afirmar quién la hizo ni su nombre." },
        { t: "Mide unos 20 cm de alto y tiene dos asas.", c: 0, e: "Medir y describir son observaciones." },
        { t: "Quizá la usaban varias familias, porque es grande.", c: 1, e: "Es una suposición argumentada; habría que contrastarla con otras fuentes." },
        { t: "Era la vasija favorita de su dueño.", c: 2, e: "Los sentimientos no pueden leerse en el objeto sin otras pruebas." }
      ]
    },
    {
      id: "e1-r2", tipo: "test", titulo: "De la huella a la evidencia",
      preguntas: [
        { q: "¿Qué distingue una inferencia de una deducción?", o: ["La inferencia es una suposición razonable y admite alternativas; la deducción se sigue de una premisa segura", "La deducción parte de observaciones directas; la inferencia, de lo que otras personas cuentan sobre la fuente", "La inferencia se basa en la intuición personal; la deducción, en los datos que aporta una persona experta"], c: 0, e: "Por eso, con fuentes incompletas, las inferencias son más frecuentes que las deducciones." },
        { q: "Según el enfoque de Collingwood que recoge Cooper, las fuentes…", o: ["transmiten la verdad si son primarias y originales", "solo dicen algo si se les hacen preguntas adecuadas", "hablan por sí mismas cuando se describen con precisión"], c: 1, e: "La investigación es una serie ordenada de preguntas a las huellas del pasado." },
        { q: "¿Cuándo es válida una inferencia sobre una fuente?", o: ["Cuando la comparte la mayoría del grupo y la confirma el docente", "Cuando es la única explicación posible de lo que muestra la fuente", "Cuando se apoya en argumentos y concuerda con lo que se sabe del período"], c: 2, e: "Puede haber varias inferencias válidas a la vez." }
      ]
    }
  ]
},

/* ===================================================================== 2 */
{
  id: "e2", num: 2,
  titulo: "Las tres bandejas",
  sub: "Fuentes primarias, secundarias y terciarias",
  lema: "¿Es primaria la fuente o lo es la pregunta?",
  idea: "Primaria, secundaria y terciaria no son etiquetas fijas del objeto, sino de su relación con lo que se investiga. Y primaria no significa verdadera.",
  prediccion: {
    q: "Antes de empezar: un libro de texto de 1965 que explica la Prehistoria, ¿qué tipo de fuente es?",
    o: ["Primaria", "Secundaria", "Depende de lo que queramos investigar"]
  },
  sintesis: [
    "La presentación distingue tres grandes grupos. Las <strong>fuentes primarias</strong> se produjeron en la época estudiada o por sus testigos: un diario, una carta, una herramienta, una fotografía, un testimonio. Las <strong>secundarias</strong> son interpretaciones posteriores elaboradas a partir de las primarias: un artículo de investigación, una monografía, un documental. Las <strong>terciarias</strong> organizan y resumen las anteriores para localizarlas o consultarlas: enciclopedias, manuales, catálogos, bibliografías y bases de datos.",
    "La categoría depende de la pregunta. Un manual escolar de 1965 es fuente secundaria si queremos saber cómo vivían los aborígenes canarios, pero primaria si investigamos cómo se enseñaba la historia en 1965. Una autobiografía es primaria para estudiar cómo alguien recordó su vida, no necesariamente la explicación más exacta de lo que cuenta. Y digitalizar una fuente no cambia su condición: el periódico de 1920 escaneado sigue siendo primario. Arias Ferrer y Egea lo formulan con claridad: la pregunta determina el valor, la utilidad, la fiabilidad e incluso la clasificación de una fuente, porque «sin preguntas no se puede iniciar un proceso de indagación». Critican, por eso, que en Primaria se clasifiquen las fuentes de memoria, a menudo sin haber visto ni manejado ninguna.",
    "Para la presentación, las primarias son las más interesantes desde el punto de vista metodológico, porque introducen al alumnado en la lógica científica de la Historia; lamenta además que los centros no tengan «laboratorios» de Historia en los que manipular y medir. La idea es fértil si se entiende bien: la Historia no experimenta en sentido estricto, pero sí observa, mide, compara y somete a prueba sus hipótesis con las huellas disponibles.",
    "Las secundarias también se evalúan. Cooper propone revisar los libros que llegan al aula con preguntas como estas: ¿hay más de una versión de la historia?, ¿las ilustraciones se basan en lo que se conoce?, ¿el texto ofrece información sin aportar pruebas?, ¿reflejan las fuentes diferencias sociales, de género y étnicas? La distinción primaria/secundaria es útil siempre que no se convierta en un atajo para decidir qué es verdad."
  ],
  conceptos: [
    { t: "Fuente primaria", d: "Producida en la época estudiada o por quienes la vivieron: testimonio o vestigio contemporáneo del hecho." },
    { t: "Fuente secundaria", d: "Interpretación posterior elaborada a partir de fuentes primarias." },
    { t: "Fuente terciaria", d: "Obra que recopila, resume u organiza fuentes primarias y secundarias (enciclopedia, catálogo, base de datos)." },
    { t: "Fuente digitalizada", d: "Reproducción digital de una fuente analógica; conserva su condición primaria o secundaria." },
    { t: "Fuente nacida digital", d: "Producida directamente en formato digital (una web, un mensaje, una foto de móvil); exige atender a autoría, fecha y metadatos." }
  ],
  cita: { texto: "Son las más interesantes desde el punto de vista metodológico.", fuente: "Presentación del tema 4, sobre las fuentes primarias (diapositiva 14)" },
  matices: [
    { t: "«Primaria» no quiere decir «más fiable»", d: "Una crónica de un testigo puede estar sesgada y una investigación posterior bien documentada puede ser mucho más fiable. La fiabilidad se valora aparte (estación 6)." },
    { t: "Una reconstrucción no es una fuente primaria", d: "Una maqueta, una recreación o un modelo 3D, como los de este laboratorio, son interpretaciones actuales del pasado, aunque se basen en fuentes." }
  ],
  aula: [
    "1.er ciclo: distinguir «cosas de entonces» (un juguete de la abuela) de «cosas que hablan de entonces» (un cuento ilustrado actual).",
    "2.º ciclo: tres bandejas reales en la mesa; cada grupo coloca en ellas las fuentes de su investigación y justifica la elección.",
    "3.er ciclo: el mismo documento con dos preguntas distintas; descubrir que cambia de bandeja."
  ],
  docente: {
    duracion: "20 minutos",
    dinamica: "Clasificación rápida en gran grupo con tarjetas y, después, la misma clasificación para otra pregunta. El cambio de categoría provoca la discusión.",
    preguntas: [
      "¿Por qué no conviene enseñar «primaria = verdadera»?",
      "¿Qué gana un niño o una niña al saber que una fuente puede cambiar de categoría?"
    ]
  },
  refs: ["tema4", "cooper2002", "arias2022", "estudio"],
  retos: [
    {
      id: "e2-r1", tipo: "clasificar", titulo: "La escuela de 1960",
      consigna: "Investigamos cómo era la escuela en Canarias hacia 1960. Coloca cada fuente en su bandeja.",
      categorias: ["Primaria", "Secundaria", "Terciaria"],
      items: [
        { t: "El cuaderno escolar de una abuela, de 1961.", c: 0, e: "Producido en la época y por una de sus protagonistas." },
        { t: "Una entrevista grabada hoy a una maestra que dio clase en 1960.", c: 0, e: "Es el testimonio de una testigo, aunque se registre ahora." },
        { t: "Un artículo de investigación de 2015 sobre la escuela franquista en Canarias.", c: 1, e: "Interpretación posterior construida con fuentes primarias." },
        { t: "La foto de la clase de 1960, escaneada en un archivo digital.", c: 0, e: "Digitalizarla no cambia su condición." },
        { t: "Una entrada de enciclopedia sobre la educación en el franquismo.", c: 2, e: "Resume y organiza lo que dicen otras obras." },
        { t: "El catálogo en línea del archivo donde se guardan los expedientes escolares.", c: 2, e: "Sirve para localizar fuentes, no para leer el pasado directamente." }
      ]
    },
    {
      id: "e2-r2", tipo: "test", titulo: "Cambio de bandeja",
      preguntas: [
        { q: "Un manual escolar de Historia de 1965 es fuente primaria si queremos saber…", o: ["cómo se enseñaba la historia en 1965", "cómo vivían los aborígenes canarios", "qué ocurrió realmente en la Prehistoria"], c: 0, e: "Para hablar del pasado que explica es secundaria; para estudiar la escuela de su tiempo, primaria." },
        { q: "¿Qué afirmación es correcta?", o: ["Las fuentes primarias son siempre más fiables que cualquier obra posterior", "Una obra secundaria rigurosa puede ser más fiable que un testimonio contemporáneo", "Las terciarias no sirven en Primaria porque solo resumen otras obras"], c: 1, e: "La relación con el hecho y la fiabilidad son ejes distintos." },
        { q: "Una reconstrucción 3D de una casa romana es…", o: ["una fuente primaria, si se basa en excavaciones", "un vestigio arqueológico digitalizado", "una interpretación actual basada en fuentes"], c: 2, e: "Puede ser útil y rigurosa, pero es una representación del presente." }
      ]
    }
  ]
},

/* ===================================================================== 3 */
{
  id: "e3", num: 3,
  titulo: "La vitrina de barro",
  sub: "Fuentes materiales: objetos, edificios e ingenios",
  lema: "¿Qué cuenta un fragmento de cerámica a quien sabe preguntarle?",
  idea: "Los restos materiales se tocan, se miden y se comparan. Bien interrogados, hablan de técnica, economía y vida cotidiana, aunque casi siempre lleguen incompletos.",
  prediccion: {
    q: "Antes de empezar: un trozo de cerámica sin decoración, ¿qué puede contarnos?",
    o: ["Casi nada, porque está roto", "Cómo se hizo, para qué servía y quién lo usaba, si sabemos preguntarle", "Solo su fecha exacta"]
  },
  sintesis: [
    "La presentación clasifica las fuentes por su naturaleza o soporte (escritas, gráficas, materiales, orales, cartográficas, iconográficas…), con independencia de que sean primarias o secundarias. Las <strong>fuentes materiales</strong> son elementos tangibles, de dimensiones muy distintas: arquitectónicas (edificios, estructuras), ingenieriles (caminos, puentes), arqueológicas (restos de edificios y objetos) y objetuales (máquinas, herramientas, cerámica). Entre las primarias, la presentación destaca las <em>objetuales</em>: restos materiales tangibles de cualquier tipo y artefactos.",
    "La cerámica es el ejemplo de la presentación: informa de aspectos tecnológicos (la cocción), económicos (vajilla de cocina o de transporte) y de la vida cotidiana cuando se decora con vestidos, peinados o calzado. Las piezas griegas que muestra, como una crátera corintia del 560-540 a.&nbsp;C. con Hércules rescatando a Hesíone (Museum of Fine Arts de Boston) o el vaso de Míkonos del siglo VII a.&nbsp;C., con la que quizá sea la representación más antigua del caballo de Troya, enseñan además que un objeto puede ser a la vez fuente material, iconográfica y escrita: un vaso corintio de Berlín identifica a Perseo y Andrómeda con inscripciones en alfabeto arcaico, escritas de derecha a izquierda.",
    "Ante cualquier objeto, la presentación propone un procedimiento: describir con precisión (materiales, dimensiones, características) y, después, formular hipótesis sobre su función, la sociedad que lo usó y su época. Los restos arqueológicos suelen ser fragmentarios y obligan a imaginar con disciplina. Con edificios, el trabajo exige mediciones, fotografías e interpretar usos y funciones, y por eso hay que salir del aula. Cooper concreta la observación: de qué están hechas las paredes y el tejado, puertas, ventanas, decoración e inscripciones; y luego las preguntas: ¿se ha modificado?, ¿cómo se calentaba e iluminaba?, ¿cuántas personas vivirían aquí?",
    "Cooper recoge un guion de preguntas para «cajas del tiempo» escolares: dibuja el objeto con sus medidas; ¿de qué está hecho y por qué?; ¿para qué se usaba?; ¿qué clase de persona lo utilizaría?; ¿qué objeto es más antiguo y por qué?; ¿qué más te gustaría saber? Advierte también que la percepción de un objeto depende del bagaje cultural de quien lo mira. En Canarias, el currículo pide reconocer las huellas de la historia en lugares, edificios, objetos, oficios o tradiciones del municipio, la isla o el archipiélago: molinos, acequias, hornos de cal, casas terreras o cerámica aborigen son fuentes al alcance de cualquier centro.",
    "Arias Ferrer y Egea defienden sin reservas los objetos: motivan, concretan algo tan abstracto como el paso del tiempo y no exigen saber leer, por lo que sirven desde los primeros cursos (una réplica de hacha pulimentada explica «pulimentada» mejor que la definición). Insisten en dos condiciones: manipular no basta, hace falta un método dialógico, basado en una buena batería de preguntas; y un objeto aislado y descontextualizado pierde casi todo su poder educativo, que se multiplica si va acompañado de otros. Lo mismo vale para el patrimonio, que va más allá de lo monumental (una fiesta, una canción, una antigua fábrica) y no debe quedarse en una lámina para memorizar las partes de un teatro romano."
  ],
  conceptos: [
    { t: "Fuente material", d: "Resto tangible del pasado: objetos, herramientas, edificios, obras de ingeniería, restos arqueológicos." },
    { t: "Fuente objetual", d: "Objeto o artefacto concreto (una vasija, una moneda, un molinillo) estudiado como huella del pasado." },
    { t: "Fuente arqueológica", d: "Resto recuperado mediante el método arqueológico; suele ser fragmentario y su valor depende del contexto en que aparece." },
    { t: "Contexto arqueológico", d: "Lugar, capa y asociación con otros restos en que se halla una pieza. Una pieza arrancada de su contexto pierde gran parte de su información." },
    { t: "Huellas de la historia", d: "Expresión del currículo de Canarias para los restos del pasado visibles en lugares, edificios, objetos, oficios y tradiciones del entorno." }
  ],
  cita: { texto: "¿Qué más te gustaría saber acerca de él? ¿Cómo podrías descubrir más cosas?", fuente: "Guion de preguntas de las «cajas del tiempo» recogido por Cooper (2002, p. 137)" },
  matices: [
    { t: "Criterios mezclados", d: "La clasificación de la presentación combina el soporte (material, escrito) con el método o el contexto (arqueológico). Una ánfora puede ser a la vez material, arqueológica e iconográfica: las categorías se solapan." },
    { t: "La vitrina no es el yacimiento", d: "En el museo la pieza ha perdido su contexto. Trabajar con ella exige preguntar también dónde y cómo se encontró." },
    { t: "Lo virtual es representación", d: "La presentación recuerda que, si no hay objetos reales, se puede acudir al mundo virtual, pero lo bueno de lo real es que se toca y se pesa. Los modelos 3D de este laboratorio no sustituyen a la pieza." },
    { t: "¿Fuentes sin sesgo?", d: "Arias Ferrer y Egea afirman que el objeto no ofrece problemas de interpretación ni sesgo, en comparación con los soportes escritos. Conviene matizarlo con Cooper: la percepción de un objeto depende del bagaje cultural de quien lo mira, y la selección de piezas que llega al aula o al museo también es una decisión." }
  ],
  aula: [
    "1.er ciclo: objeto antiguo de casa y su equivalente actual (plancha, teléfono, juguete); comparar y explicar qué ha cambiado.",
    "2.º ciclo: paseo por el barrio buscando huellas de la historia, con fotografías y un plano para situarlas.",
    "3.er ciclo: ficha de visita a un museo o yacimiento de la isla (por ejemplo, El Museo Canario o el Museo y Parque Arqueológico Cueva Pintada, en Gáldar): describir, medir, formular hipótesis y anotar qué falta saber."
  ],
  docente: {
    duracion: "25-30 minutos",
    dinamica: "Circuito de objetos (Cooper): un objeto por mesa; cada grupo escribe una pregunta, pasa a la mesa siguiente, intenta responder la pregunta anterior y añade otra.",
    preguntas: [
      "¿Por qué la cerámica es una fuente tan valiosa para la arqueología?",
      "¿Qué se pierde y qué se gana al trabajar con réplicas o modelos virtuales?"
    ]
  },
  refs: ["tema4", "cooper2002", "arias2022", "d211"],
  retos: [
    {
      id: "e3-r1", tipo: "ordenar", titulo: "El procedimiento ante un objeto",
      consigna: "Ordena los pasos para analizar un objeto del pasado.",
      items: [
        { t: "Observar y describir sin interpretar: material, forma, color, estado.", e: "Primero el dato." },
        { t: "Medir, dibujar y fotografiar.", e: "El registro obliga a mirar con atención." },
        { t: "Formular hipótesis sobre su función, quién lo usó y cuándo.", e: "Las inferencias se apoyan en lo observado." },
        { t: "Contrastar con otros objetos y fuentes semejantes.", e: "La corroboración refuerza o descarta las hipótesis." },
        { t: "Comunicar la conclusión indicando su grado de certeza.", e: "Afirmar solo lo que las pruebas permiten." }
      ]
    },
    {
      id: "e3-r2", tipo: "clasificar", titulo: "¿Qué tipo de fuente material?",
      consigna: "Clasifica cada resto según la tipología de la presentación.",
      categorias: ["Arquitectónica", "Ingenieril", "Arqueológica", "Objetual (cotidiana)"],
      items: [
        { t: "La iglesia más antigua del municipio.", c: 0, e: "Edificio: su planta, materiales y reformas cuentan su historia." },
        { t: "Un puente de piedra del siglo XIX.", c: 1, e: "Obra de ingeniería ligada a caminos y comunicaciones." },
        { t: "Los restos excavados de un poblado aborigen.", c: 2, e: "Restos recuperados con método arqueológico." },
        { t: "El molinillo de café de la abuela.", c: 3, e: "Artefacto de la vida cotidiana." },
        { t: "Una casa terrera tradicional.", c: 0, e: "Arquitectura popular." },
        { t: "Una acequia que llevaba agua a los cultivos.", c: 1, e: "Infraestructura hidráulica." }
      ]
    },
    {
      id: "e3-r3", tipo: "test", titulo: "La cerámica habla",
      preguntas: [
        { q: "Según la presentación, ¿qué tipos de información puede dar una cerámica?", o: ["Tecnológica, económica y de vida cotidiana", "Artística y decorativa, pero no económica", "Solo la fecha exacta en que se fabricó"], c: 0, e: "Cocción, uso en cocina o transporte y escenas de vestido, peinado o calzado." },
        { q: "Un vaso con los nombres de los personajes pintados es…", o: ["solo material, porque es un objeto de barro", "a la vez material, iconográfica y escrita", "una fuente secundaria, por estar decorada"], c: 1, e: "Las tipologías por soporte se solapan." }
      ]
    }
  ]
},

/* ===================================================================== 4 */
{
  id: "e4", num: 4,
  titulo: "El atril y el magnetófono",
  sub: "Fuentes escritas y orales",
  lema: "¿Quién escribió esto, para quién y por qué? ¿Cómo lo recuerda quien lo vivió?",
  idea: "Los textos y los testimonios tienen autoría e intención. Leerlos como fuentes es preguntar por ellas, sin despreciar el recuerdo ni confundirlo con la historia.",
  prediccion: {
    q: "Antes de empezar: para saber cómo era la escuela de tu abuela, ¿qué fuente elegirías?",
    o: ["Su relato", "Un libro de texto actual", "Las dos, porque responden a preguntas distintas"]
  },
  sintesis: [
    "Las <strong>fuentes escritas</strong> incluyen todo tipo de escritos: periódicos, cartas, obras literarias de la Antigüedad clásica (teatro, poemas épicos), crónicas medievales, novelas. La presentación recuerda que, según la periodización clásica, la Historia comienza con los textos de Mesopotamia y Egipto. Cooper amplía el repertorio escolar a escritos cercanos: el libro del bebé, el libro de incidencias de la escuela, los nombres de las calles, los apellidos, los rótulos de tiendas cerradas, las inscripciones de monumentos y lápidas, sellos, monedas, postales y recetas.",
    "Todo escrito tiene autoría e intención. Cooper advierte que los diarios pueden ser tendenciosos, que los periódicos pueden estar sesgados y que un relato aparentemente histórico puede ser, ante todo, una exhortación: el monje Gildas, en el siglo VI, quizá no narraba tanto la derrota de los britanos como los animaba a resistir. Leer una fuente escrita es preguntar quién escribe, para quién y con qué propósito, además de qué dice.",
    "Las <strong>fuentes orales</strong> dan voz a hombres y mujeres corrientes. Cooper detalla cómo preparar una entrevista: elegir a la persona y un foco concreto (juguetes, escuela, comida), enseñar al alumnado a estructurarla (unas preguntas cerradas para situar, muchas abiertas para explorar y un cierre que devuelva al presente), ensayar grabándose entre ellos y hacer un seguimiento. Las preguntas cerradas («¿le gustaba?») no llevan a ninguna parte; las abiertas («¿con qué jugaban?») abren relatos.",
    "El testimonio oral también se evalúa. Cooper cita el caso de un pescador que visitaba cada año una escuela: su marsopa se fue convirtiendo en una ballena digna de una película, y los niños acabaron discutiendo si mentía, si se equivocaba o si adornaba para contar mejor. El currículo de Canarias pide en el primer ciclo utilizar fuentes orales reconociendo la importancia de la memoria colectiva. Recuerdo e historia se alimentan, pero no son lo mismo. Arias Ferrer y Egea lo subrayan: en la fuente oral la historia se mezcla con la memoria, las emociones y los recuerdos, y por eso la mediación docente en los guiones de entrevista y en la interpretación es clave. Proponen la historia personal y familiar como punto de partida (con «cajas de la memoria» y preguntas a las fotos de casa: ¿cuándo se tomó?, ¿quién iba a verla?, ¿qué quedó fuera?) y piden después situarla en la historia local, nacional y global. Grabar a personas exige además su consentimiento y cuidado con los datos personales."
  ],
  conceptos: [
    { t: "Fuente escrita", d: "Cualquier texto del pasado o sobre él: documentos, cartas, prensa, literatura, inscripciones, rótulos." },
    { t: "Fuente oral", d: "Testimonio hablado de quien vivió o conoció un hecho, registrado mediante entrevista." },
    { t: "Historia oral", d: "Método que construye conocimiento histórico a partir de entrevistas, sobre todo a personas corrientes." },
    { t: "Memoria colectiva", d: "Recuerdo compartido por un grupo; es fuente para la historia, pero no equivale a ella." },
    { t: "Intencionalidad", d: "Propósito con que se produjo una fuente (informar, convencer, exhortar, recordar, vender)." }
  ],
  cita: { texto: "Los niños pequeños son capaces de hacer análisis sofisticados si el contexto les interesa.", fuente: "Cooper (2002, p. 122), a propósito del relato del pescador" },
  matices: [
    { t: "«La Historia empieza con la escritura» es una convención", d: "Es la periodización clásica que recoge la presentación. Las sociedades sin escritura también tienen historia, y la Prehistoria se estudia con otras fuentes." },
    { t: "Ojo con los documentos personales", d: "Cooper advierte que las partidas de nacimiento o de matrimonio pueden ser un terreno delicado para algunas familias. Conviene ofrecer alternativas." },
    { t: "Consentimiento", d: "Una entrevista grabada es un dato personal. Hay que informar, pedir permiso y no difundirla sin autorización." }
  ],
  aula: [
    "1.er ciclo: entrevista a un familiar sobre los juguetes de su infancia, con cinco preguntas iniciales decididas en clase, y una «caja de la memoria» con fotos y objetos de la familia.",
    "2.º ciclo: los nombres de las calles y las placas del barrio como fuentes escritas: ¿a quién o a qué recuerdan?, ¿desde cuándo?",
    "3.er ciclo: contrastar una noticia de prensa antigua (por ejemplo, de la hemeroteca digital Jable de la ULPGC) con el testimonio de una persona mayor sobre el mismo hecho."
  ],
  docente: {
    duracion: "25 minutos",
    dinamica: "Simular dos versiones de una entrevista breve, una con preguntas cerradas y otra con preguntas abiertas, y comparar cuánta información da cada una.",
    preguntas: [
      "¿Qué diferencia hay entre que un testigo mienta, se equivoque o adorne su relato?",
      "¿Cómo se enseña a respetar el recuerdo de una persona y, a la vez, a contrastarlo?"
    ]
  },
  refs: ["tema4", "cooper2002", "arias2022", "d211"],
  retos: [
    {
      id: "e4-r1", tipo: "clasificar", titulo: "Preparar la entrevista",
      consigna: "Clasifica cada pregunta de una entrevista sobre la escuela de antes.",
      categorias: ["Cerrada (sitúa)", "Abierta (explora)", "De seguimiento (profundiza)"],
      items: [
        { t: "¿En qué año empezó usted la escuela?", c: 0, e: "Da un dato y fija el marco." },
        { t: "¿Le gustaba ir al colegio?", c: 0, e: "Se responde con sí o no; por sí sola no lleva lejos." },
        { t: "¿Cómo era un día de clase?", c: 1, e: "Invita a contar." },
        { t: "¿A qué jugaban en el recreo?", c: 1, e: "Abre un relato concreto." },
        { t: "¿Y qué pasó después?", c: 2, e: "Mantiene el hilo del relato." },
        { t: "¿Cómo se sintió entonces? ¿Cómo lo sabe?", c: 2, e: "Profundiza en la vivencia y en la procedencia del recuerdo." }
      ]
    },
    {
      id: "e4-r2", tipo: "test", titulo: "Leer con sospecha razonable",
      preguntas: [
        { q: "El pescador cuya marsopa se convirtió en ballena enseña que…", o: ["las fuentes orales no sirven para estudiar el pasado reciente", "las personas mayores mienten cuando hablan con niños y niñas", "los relatos pueden transformarse al contarse y hay que contrastarlos"], c: 2, e: "Permite distinguir mentira, error y adorno narrativo." },
        { q: "¿Por qué el relato de Gildas es un buen ejemplo para el aula?", o: ["Porque muestra que un texto narrativo puede tener intención exhortativa", "Porque es el relato más antiguo y, por tanto, el más fiable", "Porque prueba que las crónicas medievales inventaban los hechos"], c: 0, e: "Preguntar por el propósito cambia la lectura." },
        { q: "En una entrevista, conviene que predominen…", o: ["las preguntas cerradas, para obtener datos precisos y comparables", "las preguntas abiertas, tras unas pocas cerradas para situar", "las preguntas preparadas por el docente, leídas en orden"], c: 1, e: "Es la estructura que Cooper recoge de la historia oral." }
      ]
    }
  ]
},

/* ===================================================================== 5 */
{
  id: "e5", num: 5,
  titulo: "El caballete y el mapamundi",
  sub: "Fuentes iconográficas, artísticas y cartográficas",
  lema: "¿Qué nos enseña una imagen: lo que pasó o cómo se quiso mostrar?",
  idea: "Pinturas, fotografías, películas y mapas seleccionan, ordenan y a veces deforman el mundo que representan. Por eso son fuentes excelentes de las miradas de su tiempo.",
  prediccion: {
    q: "Antes de empezar: un cuadro que narra un suceso famoso, ¿sirve para saber qué ocurrió?",
    o: ["Sí: el pintor lo vio", "Sirve, sobre todo, para saber cómo se contó e imaginó", "No sirve para nada"]
  },
  sintesis: [
    "Las <strong>fuentes iconográficas</strong> tienen soportes muy diversos: bajorrelieve, pintura mural o sobre papiro, escultura, fotografía, producciones animadas, películas y vídeos. Algunas son obras de arte, y las <strong>fuentes artísticas</strong> muestran, según la presentación, el imaginario de una sociedad concreta. Cooper recuerda sus límites: las pinturas dan una visión selectiva, saneada y a veces manipulada del pasado (Huizinga observaba que el arte presenta las épocas más serenas y felices de lo que muestran otras fuentes), y la fotografía, reconocida como fuente importante desde los años sesenta, también selecciona.",
    "Un caso de la presentación: la serie de seis tablas en la que <strong>Goya</strong> narró en 1806-1807 la captura del bandido Pedro Piñero, «el Maragato», por fray Pedro de Zaldivia (The Art Institute of Chicago). Se ha comparado con un guion gráfico cinematográfico, y el suceso se divulgó a la vez en pliegos, poemas y estampas populares. Como fuente de lo ocurrido es indirecta; como fuente de cómo la sociedad de 1806 contó y celebró el hecho, es de primer orden. Las viñetas de cómic que muestra la presentación funcionan igual: son interpretaciones del pasado y, a la vez, fuentes primarias de su propia época.",
    "Las <strong>fuentes cartográficas</strong> pretenden representar un espacio: mapas y planos de distintas épocas. Comes muestra que cada mapa es una cosmovisión: los mapas medievales de «T en O» eran representaciones simbólicas; los portulanos mallorquines de la escuela de Cresques servían a la navegación; el planisferio de Mercator (1569) fue útil para navegar, pero amplía tanto las latitudes altas que Groenlandia, unas ocho veces menor que América del Sur, aparece incluso mayor. La cartografía, añade, fue un saber técnico al servicio del poder y los mapas llegaron a ser secretos de Estado.",
    "Para leer imágenes, Cooper propone una secuencia: visión general (¿qué personas ves?, ¿dónde están?, ¿qué hacen?, ¿hay letras o emblemas?), detalles (ropa, objetos, peinados, edificios, fondo, gestos) e interpretación (¿cuenta una historia?, ¿qué pudo pasar antes o después?, ¿qué sentimos al mirarla?). Hoy se suman la fotografía aérea y los visores digitales que cita la presentación, como Google Earth, y los de los institutos cartográficos, que permiten comparar el mismo lugar en distintas fechas.",
    "Arias Ferrer y Egea advierten de que, en Primaria, el alumnado suele estar en una fase de <em>lectura realista ingenua</em> (Carretero y González): toma fotografías, obras de arte e incluso textos como ventanas directas al pasado. Por eso hay que enseñar a <em>mirar</em> (no solo a ver) y convertir la imagen en fuente, no en ilustración del texto: usada como adorno, refuerza la idea de que lo que muestra es fiable. Lo mismo ocurre con el cine, que cristaliza la cultura de su época y, siguiendo a Ferro, puede usarse como fuente primaria de esa época, además de como recurso para desmontar estereotipos."
  ],
  conceptos: [
    { t: "Fuente iconográfica", d: "Imagen fija o en movimiento (pintura, relieve, fotografía, película) estudiada como huella del pasado." },
    { t: "Fuente artística", d: "Obra de arte que informa del imaginario, los valores y las técnicas de una sociedad." },
    { t: "Fuente cartográfica", d: "Mapa o plano que representa un espacio en un momento dado y con una intención concreta." },
    { t: "Proyección cartográfica", d: "Método para pasar la esfera terrestre al plano; toda proyección deforma algo (áreas, formas o distancias)." },
    { t: "Imaginario social", d: "Conjunto de imágenes, valores y creencias compartidos por una sociedad, visibles en sus producciones." }
  ],
  cita: { texto: "un brillante ejercicio cartográfico etnocéntrico", fuente: "Comes (2006, p. 142), sobre el planisferio de Mercator" },
  matices: [
    { t: "¿Valdivia o Zaldivia?", d: "La presentación escribe «Valdivia». El pliego impreso en Madrid en 1806 sobre el suceso ya usa esa grafía, mientras que el catálogo razonado de la obra de Goya emplea «Zaldivia». Las propias fuentes transmiten variantes: otra lección sobre corroboración." },
    { t: "La fecha del Maragato", d: "La presentación indica 1807; la ficha de la Fundación Goya en Aragón data la serie en 1806-1807." },
    { t: "La foto también decide", d: "Encuadre, pose, retoque y, hoy, imágenes generadas por IA: una fotografía no es una ventana neutral." }
  ],
  aula: [
    "1.er ciclo: fotografías «antes y ahora» del mismo lugar del barrio: ¿qué ha cambiado y qué sigue igual?",
    "2.º ciclo: ordenar y narrar una secuencia de imágenes (por ejemplo, la del Maragato, consultada en la web del museo) y preguntarse qué sabemos del suceso y qué solo de cómo se contó.",
    "3.er ciclo: comparar Mercator con una proyección de áreas iguales y un plano histórico de la localidad con una ortofoto actual."
  ],
  docente: {
    duracion: "25-30 minutos",
    dinamica: "Proyectar una imagen y aplicar la secuencia de Cooper en voz alta; después, el alumnado la aplica por parejas a otra imagen.",
    preguntas: [
      "¿Por qué un cómic histórico es a la vez fuente secundaria y primaria?",
      "¿Qué consecuencias tiene para la imagen del mundo usar siempre el mismo planisferio en clase?"
    ]
  },
  refs: ["tema4", "cooper2002", "arias2022", "comes2006", "goya", "noticia1806"],
  retos: [
    {
      id: "e5-r1", tipo: "ordenar", titulo: "Leer una imagen",
      consigna: "Ordena la secuencia de preguntas para analizar un cuadro o una fotografía.",
      items: [
        { t: "Visión general: ¿qué personas y lugares aparecen?, ¿qué hacen?", e: "Primero el conjunto." },
        { t: "Detalles: ropa, objetos, peinados, edificios, fondo, gestos.", e: "La observación minuciosa da pruebas." },
        { t: "Letras, emblemas y datos de autoría y fecha.", e: "Ayudan a atribuir y contextualizar." },
        { t: "Interpretación: ¿cuenta una historia?, ¿qué pasó antes o después?", e: "Las inferencias se apoyan en lo observado." },
        { t: "Valoración: ¿qué quiso mostrar quien la hizo?, ¿qué deja fuera?", e: "La imagen como representación con intención." }
      ]
    },
    {
      id: "e5-r2", tipo: "clasificar", titulo: "¿Imagen, obra o mapa?",
      consigna: "Clasifica cada fuente según su tipo principal.",
      categorias: ["Iconográfica", "Cartográfica", "Artística"],
      items: [
        { t: "Una fotografía del puerto de tu isla hacia 1920.", c: 0, e: "Imagen documental de un lugar y un momento." },
        { t: "Un plano antiguo de la ciudad.", c: 1, e: "Representa el espacio urbano de una época." },
        { t: "Un mapa medieval de «T en O».", c: 1, e: "Cosmovisión cartográfica medieval." },
        { t: "Un documental antiguo sobre la zafra del tomate.", c: 0, e: "Producción audiovisual: imagen en movimiento." },
        { t: "Un vaso con decoración en relieve que muestra un ritual.", c: 2, e: "Manifestación artística que refleja el imaginario de una sociedad." },
        { t: "El planisferio de Mercator de 1569.", c: 1, e: "Proyección pensada para navegar." }
      ]
    },
    {
      id: "e5-r3", tipo: "test", titulo: "Mapas e imágenes con intención",
      preguntas: [
        { q: "En el planisferio de Mercator, Groenlandia…", o: ["aparece con su tamaño real, porque la proyección conserva las áreas", "aparece más pequeña de lo que es, comprimida junto al polo", "aparece mucho mayor de lo que es en relación con América del Sur"], c: 2, e: "Es unas ocho veces menor que América del Sur, pero se representa incluso mayor." },
        { q: "La serie del Maragato de Goya es, sobre todo, una fuente primaria de…", o: ["cómo se contó y celebró el suceso en su época", "los detalles exactos del enfrentamiento", "la vida de los bandidos en la Edad Media"], c: 0, e: "El suceso se divulgó en pliegos, poemas y estampas; la serie forma parte de esa difusión." }
      ]
    }
  ]
},

/* ===================================================================== 6 */
{
  id: "e6", num: 6,
  titulo: "La balanza de pruebas",
  sub: "Interrogar la fuente: atribución, contexto, corroboración y fiabilidad",
  lema: "¿Fiable para qué pregunta, y con qué limitaciones?",
  idea: "Los historiadores miran primero quién habla, sitúan la fuente en su tiempo y la comparan con otras. La fiabilidad no es una etiqueta: se gradúa según la pregunta.",
  prediccion: {
    q: "Antes de empezar: una página web con aspecto profesional y miles de visitas, ¿es fiable?",
    o: ["Sí: si fuera falsa, no tendría tantas visitas", "No necesariamente: hay que ver quién la publica y qué dicen otras fuentes", "Nunca: internet no es fiable"]
  },
  sintesis: [
    "<strong>Wineburg</strong> (1991) comparó cómo leían los mismos documentos historiadores y estudiantes y describió tres operaciones expertas: la <em>atribución de la fuente</em> (mirar primero quién la produjo, cuándo y para qué, antes de leer el contenido), la <em>contextualización</em> (situarla en su tiempo y lugar) y la <em>corroboración</em> (compararla con otras). Se han convertido en el núcleo de la enseñanza del pensamiento histórico, junto con el concepto de evidencia que Seixas y Morton (2013) cuentan entre sus seis grandes conceptos. Arias Ferrer y Egea concretan qué supone pensar como un historiador en la escuela: analizar el argumento de la fuente y su procedencia, con su credibilidad y su posible sesgo; compararla con otras; atender a las distintas perspectivas; entender cómo daban sentido a su experiencia las sociedades del pasado; tener en cuenta la multicausalidad, y asumir que toda interpretación es provisional.",
    "En el aula se concretan en una rutina estable de seis preguntas: <strong>¿quién?</strong> (autoría), <strong>¿cuándo?</strong> (fecha), <strong>¿dónde?</strong> (medio, archivo o plataforma), <strong>¿para qué?</strong> (propósito y destinatario), <strong>¿con qué pruebas?</strong> y <strong>¿quién más lo confirma?</strong>. La fiabilidad es relativa a la pregunta: un cartel de propaganda es mala fuente para conocer una cifra y una fuente excelente para estudiar la propaganda.",
    "La presentación distingue las fuentes impresas (bibliotecas, centros de documentación) de las electrónicas (internet). Hoy conviene añadir las digitalizadas, las nacidas digitales y sus metadatos. Ante una web desconocida, la <strong>lectura lateral</strong> consiste en salir de ella y comprobar qué dicen otras fuentes solventes sobre quién la publica. La revisión de McGrew (2023) encuentra intervenciones eficaces desde Primaria hasta la edad adulta, aunque pide más investigación sobre su diseño y duración; el alumnado, sin enseñanza, rara vez evalúa bien las fuentes en línea (McGrew et al., 2018).",
    "La evidencia con alumnado de Primaria es prometedora y matizada. En un programa de 21 sesiones con 342 estudiantes de 6.º, el grupo de intervención justificó mejor la credibilidad de las páginas con rasgos de la fuente, pero no con el análisis de los argumentos (Hämäläinen et al., 2020). Una instrucción explícita más breve, en vídeo, mejoró la capacidad de cuestionar textos poco creíbles (Kiili et al., 2025), y un ensayo aleatorizado con el programa NewsWise, con alumnado de 9-11 años, mejoró la detección de desinformación (Polizzi et al., 2026). Una respuesta de IA generativa no es una fuente equivalente a un documento: es un texto que se analiza, buscando el origen de cada afirmación."
  ],
  conceptos: [
    { t: "Atribución de la fuente (sourcing)", d: "Preguntar quién produjo la fuente, cuándo, dónde y con qué propósito antes de interpretar su contenido." },
    { t: "Contextualización", d: "Situar la fuente en su tiempo, su lugar y sus circunstancias de producción." },
    { t: "Corroboración", d: "Comparar una fuente con otras independientes para ver coincidencias, diferencias y contradicciones." },
    { t: "Fiabilidad situada", d: "Valoración de una fuente en relación con una pregunta concreta, y no como etiqueta absoluta de «fiable» o «no fiable»." },
    { t: "Lectura lateral", d: "Abandonar una web desconocida para comprobar en otras fuentes quién la publica y qué crédito merece." },
    { t: "Perspectiva o sesgo", d: "Punto de vista desde el que se produce una fuente; condiciona lo que muestra y lo que omite." }
  ],
  cita: { texto: "¿Fiable para responder qué pregunta y con qué limitaciones?", fuente: "Estudio didáctico del empleo de las fuentes en Educación Primaria (2026)" },
  matices: [
    { t: "Desconfiar de todo no es pensamiento crítico", d: "El escepticismo sistemático es tan poco racional como la credulidad. Se trata de graduar la confianza según la calidad de la evidencia." },
    { t: "Lo institucional es un indicio, no una garantía", d: "Una web oficial merece en principio más confianza, pero también hay que preguntarle por su fecha, sus pruebas y su propósito." },
    { t: "Abundancia no es diversidad", d: "Arias Ferrer y Egea ponen un ejemplo: muchas fuentes sobre la conquista castellana de América, todas desde el punto de vista de los vencedores. Hay fuentes y son abundantes, pero no son diversas, y llevan a una visión acrítica y sesgada." },
    { t: "La IA no es una fuente", d: "Puede ayudar a encontrar pistas, pero no tiene autoría ni procedencia verificables. Se rastrea cada afirmación hasta un documento identificable." }
  ],
  aula: [
    "1.er ciclo: «¿Quién nos lo cuenta?»: ante una información sencilla, decir de dónde procede y cómo podríamos comprobarla.",
    "2.º ciclo: «Dos fuentes, una historia»: tabla comparativa con las seis preguntas y una conclusión con dos evidencias.",
    "3.er ciclo: «¿Podemos creer esta página?»: lectura lateral guiada y verificación de una respuesta de IA buscando el origen de cada dato."
  ],
  docente: {
    duracion: "30 minutos",
    dinamica: "Dos páginas sobre el mismo tema, una institucional y otra poco respaldada. Por grupos, con roles: observador de evidencias, verificador de procedencia, buscador de corroboración y portavoz.",
    preguntas: [
      "¿Por qué enseñar «fiable / no fiable» puede ser contraproducente?",
      "¿Cómo convertir una respuesta de IA en material de análisis de fuentes?"
    ]
  },
  refs: ["wineburg1991", "seixas2013", "arias2022", "mcgrew2018", "mcgrew2023", "hamalainen2020", "kiili2025", "polizzi2026", "tema4", "estudio"],
  retos: [
    {
      id: "e6-r1", tipo: "clasificar", titulo: "Las tres operaciones expertas",
      consigna: "Asigna cada pregunta a la operación que pone en juego.",
      categorias: ["Atribución de la fuente", "Contextualización", "Corroboración"],
      items: [
        { t: "¿Quién escribió esta carta y para quién?", c: 0, e: "Se pregunta por la autoría y el destinatario." },
        { t: "¿Qué estaba pasando en la isla cuando se publicó esta noticia?", c: 1, e: "Se sitúa la fuente en su momento." },
        { t: "¿Coincide este testimonio con lo que dice el periódico de la época?", c: 2, e: "Se comparan fuentes independientes." },
        { t: "¿Con qué intención se pintó este cuadro?", c: 0, e: "El propósito forma parte de la atribución." },
        { t: "¿Qué se sabía o se creía entonces sobre este asunto?", c: 1, e: "El horizonte de la época condiciona la fuente." },
        { t: "¿Hay otra fuente que confirme esta cifra?", c: 2, e: "La corroboración refuerza o debilita una afirmación." }
      ]
    },
    {
      id: "e6-r2", tipo: "test", titulo: "Fiabilidad situada",
      preguntas: [
        { q: "Un cartel de propaganda de una guerra es…", o: ["mala fuente para cifras y excelente para estudiar la propaganda", "inútil como fuente, porque su intención es manipular", "siempre fiable, porque es una fuente primaria de la época"], c: 0, e: "La fiabilidad depende de la pregunta." },
        { q: "La lectura lateral consiste en…", o: ["leer la página completa dos veces antes de juzgar su contenido", "salir de la página para comprobar en otras fuentes quién la publica", "comparar el diseño de la página con el de otras webs oficiales"], c: 1, e: "Es lo que hacen los verificadores profesionales." },
        { q: "En el estudio de Hämäläinen et al. (2020), tras la intervención el alumnado de 6.º…", o: ["evaluó con acierto todas las páginas y aplicó después esos juicios en sus textos escritos", "no mostró ninguna diferencia respecto al grupo de control en ninguno de los aspectos medidos", "justificó mejor la credibilidad con rasgos de la fuente, pero no con el análisis de los argumentos"], c: 2, e: "La mejora fue real pero parcial: la evaluación de la credibilidad siguió siendo difícil para la mayoría." },
        { q: "Ante una respuesta de un asistente conversacional de IA, lo adecuado es…", o: ["rastrear cada afirmación hasta un documento identificable", "citarla como fuente secundaria, indicando el nombre del programa", "descartarla sin leerla, porque la IA siempre se equivoca"], c: 0, e: "La IA no tiene autoría ni procedencia verificables." }
      ]
    }
  ]
},

/* ===================================================================== 7 */
{
  id: "e7", num: 7,
  titulo: "La caja del tiempo",
  sub: "Las fuentes en el aula: progresión, currículo y evaluación",
  lema: "¿Desde cuándo y cómo se aprende a razonar con fuentes?",
  idea: "Niños y niñas pueden razonar con fuentes desde los primeros cursos si se les enseña de forma explícita y progresiva. Hay que evaluar el razonamiento, no solo la respuesta.",
  prediccion: {
    q: "Antes de empezar: ¿desde qué curso puede el alumnado trabajar con fuentes históricas?",
    o: ["Desde 1.º, con objetos, imágenes y testimonios", "Desde 5.º, cuando razona en abstracto", "Solo en Secundaria"]
  },
  sintesis: [
    "Cooper discute la visión piagetiana de un pensamiento infantil dominado por el ensayo y el error con trabajos como los de Donaldson (1978): los niños pequeños razonan deductivamente si el problema surge de sus intereses y entienden lo que se les pide. Recoge que, con 7 años, pueden extraer conclusiones propias de sus experiencias con la cerámica y que, con 8, aprenden a hacer inferencias complejas sobre objetos, cuadros, planos, mapas y textos. La investigación reciente apunta en la misma dirección, con matices.",
    "Con alumnado finlandés de 12 años, la mayoría obtuvo información de fuentes diversas y entendió el carácter interpretativo del conocimiento histórico, pero parte no supo manejar fuentes contradictorias y algunos consideraron más fiable la fuente con autoridad (Rantala y Khawaja, 2018). La enseñanza explícita de estrategias de pensamiento histórico mejoró el conocimiento de contenidos frente a un grupo de control (Burnett y Cuevas, 2023), y alumnado de 5.º trabajó atribución, contextualización y corroboración con el marco SOURCES, aunque en grados distintos y con necesidad de tiempo y modelado explícito (Cruz y Waring, 2026). En 2.º grado, las maletas didácticas del Museo del Oro de Bogotá estimularon la observación, las preguntas y la motivación (Alarcón Gama, 2024).",
    "De ahí una <strong>progresión</strong> razonable: en el primer ciclo, observar, describir y distinguir «lo que veo» de «lo que creo»; en el segundo, identificar autoría, fecha y propósito y comparar dos fuentes; en el tercero, contextualizar, corroborar, valorar la fiabilidad, detectar ausencias y citar. El currículo de Canarias la recoge en el criterio 2.2 de cada ciclo, que pasa de «buscar información sencilla… de manera pautada» a «buscar, seleccionar y contrastar… usando los criterios de fiabilidad de fuentes». En los currículos de la etapa anterior aún predominaban las demandas de memorizar y comprender (Arias-Ferrer et al., 2021). Arias Ferrer y Egea defienden empezar cuanto antes, ya en Infantil, con observación, descripción y preguntas guiadas sobre fuentes de alto componente iconográfico, y ampliar el repertorio a medida que crece la capacidad lectora, hasta que el alumnado se enfrente «de tú a tú» con la fuente y cuestione su autenticidad o su fiabilidad. Proponen también usar el libro de texto como objeto de análisis: sus narraciones son construcciones que pueden interrogarse, no la historia misma.",
    "Evaluar fuentes es evaluar razonamiento: identificación, observación, contextualización, fiabilidad, corroboración, argumentación y cita. Conviene recoger huellas del proceso (fichas, notas de comparación, borradores, tiques de salida) y estructurar el trabajo en grupo con roles, porque la interacción sin normas no garantiza mejores decisiones. Para empezar, Cooper propone un museo de clase o una caja del tiempo: objetos con equivalente moderno y finalidad conocida por el alumnado, que permitan descubrir cómo se hicieron y usaron, y nunca objetos valiosos, frágiles o peligrosos."
  ],
  conceptos: [
    { t: "Progresión", d: "Secuencia de desempeños cada vez más complejos a lo largo de la etapa: de una fuente contextualizada a pares de fuentes y, al final, pequeños expedientes contradictorios." },
    { t: "Andamiaje", d: "Apoyo temporal (guion de preguntas, organizador, modelado del docente) que se retira a medida que el alumnado gana autonomía." },
    { t: "Rúbrica analítica", d: "Instrumento que describe niveles de desempeño por dimensiones (identificación, contextualización, corroboración, argumentación…)." },
    { t: "Huellas del proceso", d: "Registros que muestran cómo se llegó a una conclusión: fichas, notas, borradores, explicaciones orales." },
    { t: "Caja del tiempo o museo de clase", d: "Colección escolar de objetos y documentos seleccionados con criterios didácticos para investigar el pasado." }
  ],
  cita: { texto: "[…] tienen que comprender que no puede haber una única respuesta correcta", fuente: "Cooper (2002, p. 117), sobre las inferencias de los niños pequeños" },
  matices: [
    { t: "Más fuentes no es mejor", d: "La corroboración es exigente: primero una fuente bien contextualizada, después pares y, al final de la etapa, pequeños expedientes." },
    { t: "Comparación internacional con cautela", d: "Las referencias a los currículos de Inglaterra y Finlandia de la Guía de estudio proceden del estudio de la asignatura; su texto no se ha cotejado en este recurso." },
    { t: "Equidad", d: "Las tareas que exijan consultar fuentes digitales deben poder hacerse en el centro, con sus dispositivos y conexión." },
    { t: "El horizonte no está resuelto", d: "Con alumnado de Secundaria y Bachillerato de Zaragoza, Rivero et al. (2023) describen como incipiente el trabajo con fuentes y su fiabilidad: lo que no se siembra en Primaria no aparece solo después." }
  ],
  aula: [
    "1.er ciclo: caja del tiempo con objetos cotidianos y una línea de cuerda para ordenarlos de más antiguo a más reciente.",
    "2.º ciclo: «Dos imágenes, una historia»: foto antigua y actual del mismo lugar, un plano y un testimonio; conclusión con dos evidencias.",
    "3.er ciclo: expediente documental sobre la vida cotidiana del municipio en el siglo XX (foto, plano, noticia, testimonio y dato estadístico) y un informe o pódcast con las evidencias citadas."
  ],
  docente: {
    duracion: "30-40 minutos",
    dinamica: "Por grupos, cada uno diseña una actividad para un ciclo con la Mesa de diseño y la evalúa con la rúbrica de la Guía de estudio.",
    preguntas: [
      "¿Qué cambia si se evalúa el procedimiento y no solo la respuesta final?",
      "¿Qué roles harían que el trabajo en grupo con fuentes fuera realmente cooperativo?"
    ]
  },
  refs: ["cooper2002", "arias2022", "rantala2018", "burnett2023", "cruz2026", "alarcon2024", "ariasferrer2021", "rivero2023", "d211", "rd157", "estudio"],
  retos: [
    {
      id: "e7-r1", tipo: "ordenar", titulo: "Una progresión de 1.º a 6.º",
      consigna: "Ordena los desempeños de menor a mayor complejidad (de 1.º a 6.º).",
      items: [
        { t: "Distingue qué observa y qué imagina.", e: "1.º" },
        { t: "Explica de dónde procede una información sencilla.", e: "2.º" },
        { t: "Identifica autor, fecha o tipo de fuente.", e: "3.º" },
        { t: "Contrasta dos fuentes y justifica cuál resulta más útil.", e: "4.º" },
        { t: "Evalúa propósito, pruebas y fiabilidad.", e: "5.º" },
        { t: "Integra varias fuentes, explica discrepancias y argumenta una conclusión documentada.", e: "6.º" }
      ],
      explicacion: "Progresión propuesta en el estudio de la asignatura; es una orientación, no una norma curricular."
    },
    {
      id: "e7-r2", tipo: "clasificar", titulo: "El currículo de Canarias por ciclos",
      consigna: "¿A qué ciclo pertenece cada fragmento literal del Decreto 211/2022?",
      categorias: ["1.er ciclo", "2.º ciclo", "3.er ciclo"],
      items: [
        { t: "«Buscar información sencilla de diferentes fuentes seguras y fiables, incluidas las digitales, de manera pautada…»", c: 0, e: "Criterio 2.2 del primer ciclo." },
        { t: "«Buscar, seleccionar y comprender información de diferentes fuentes seguras y fiables…»", c: 1, e: "Criterio 2.2 del segundo ciclo." },
        { t: "«Buscar, seleccionar y contrastar información… usando los criterios de fiabilidad de fuentes…»", c: 2, e: "Criterio 2.2 del tercer ciclo." },
        { t: "«Uso de objetos y artefactos de la vida cotidiana como fuentes para reflexionar sobre el cambio y la continuidad…»", c: 0, e: "Saber III.2.2 del primer ciclo." },
        { t: "«Clasificación y utilización de las distintas fuentes históricas… como vía para el análisis de los cambios y las permanencias en la localidad…»", c: 1, e: "Saber III.2.2 del segundo ciclo." },
        { t: "«…para buscar información, evaluando su fiabilidad y utilidad, y respetando la propiedad intelectual…»", c: 2, e: "Criterio 1.1 del tercer ciclo (competencia digital del área)." }
      ]
    },
    {
      id: "e7-r3", tipo: "test", titulo: "Lo que dice la investigación",
      preguntas: [
        { q: "En el estudio con alumnado finlandés de 12 años (Rantala y Khawaja, 2018), ¿qué dificultad apareció?", o: ["Comprender que el conocimiento histórico tiene carácter interpretativo", "Manejar fuentes contradictorias y no privilegiar la fuente con autoridad", "Obtener información de fuentes escritas y visuales de distinto tipo"], c: 1, e: "La mayoría entendió el carácter interpretativo de la historia, pero la contradicción documental fue un obstáculo." },
        { q: "¿Qué recomienda Cooper para seleccionar objetos de una caja del tiempo?", o: ["Que sean piezas originales y valiosas, para despertar el interés del grupo", "Que sean frágiles, para enseñar a manipularlas con cuidado", "Que tengan un equivalente moderno y una finalidad conocida por el alumnado"], c: 2, e: "Así se pueden comparar y explicar los cambios; se rechazan los objetos valiosos, frágiles o peligrosos." }
      ]
    }
  ]
}
];
