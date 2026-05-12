import random
from flask import Flask, render_template, request, redirect, url_for, session

app = Flask(__name__)
app.secret_key = 'arribaPita'

# Banco de distractores temáticos con el estilo de "Los Juegos del Hambre"
ARENA = {
    'reglas': {
        'titulo': 'Distrito de la Ley: El Entrenamiento',
        'lore': 'En Panem, la disciplina es supervivencia. Quien rompe las reglas, es borrado de la cosecha.',
        'info': 'Un paracaídas cae del cielo: "No llegues tarde a la frontera, solo tienes 10 minutos de gracia. Sin el 80% de lealtad (asistencia), no habrá suministros para ti. Y recuerda... el hambre se guarda para después de la batalla."',
        'pool': ["80% de lealtad", "95% de valor", "30 min de ventaja", "Uniforme de gala", "Solo agua", "10 min de tregua"],
        'preguntas': [
            {'q': '¿Qué porcentaje de asistencia exige el Capitolio para tener derecho a evaluación?', 'a': '80%'}, 
            {'q': '¿Cuántos minutos de tolerancia tienes antes de que se cierre la frontera (asistencia)?', 'a': '10 min'} 
        ],
        'siguiente': 'notas'
    },
    'notas': {
        'titulo': 'La Cornucopia: Suministros Vitales',
        'lore': 'Tus notas son tus flechas. Un tiro errado en el tercer parcial podría ser el último.',
        'info': 'Una nota pegada a un caldo caliente: "Asegura tus primeros tiros al 40%. En el gran final, tu arma más pesada (Proyecto Integrador) valdrá la mitad de tu vida. ¡Apunta bien!"',
        'pool': ["40% de ración", "90% de victoria", "50% de probabilidad", "Solo 2 flechas", "Examen de muerte", "50% de suministros"],
        'preguntas': [
            {'q': '¿Cuál es el valor de la flecha de Conocimiento en los primeros dos parciales?', 'a': '40%'}, 
            {'q': '¿Qué porcentaje del botín representa el Proyecto Integrador en el 3er Parcial?', 'a': '50%'} 
        ],
        'siguiente': 'skills'
    },
    'skills': {
        'titulo': 'Distrito de Tecnología: Forjando el Acero',
        'lore': 'Un tributo sin armas es solo un blanco. Tu escudo es el software multiplataforma.',
        'info': 'El mentor te susurra al oído: "No busques armas pesadas; busca las que sirvan en todo terreno (multiplataforma). Tu objetivo es dominar el campo móvil antes de que el enemigo lo haga."',
        'pool': ["Arma móvil", "Escudo de red", "Apps de vapor", "Sistemas de Panem", "Multi-ataque", "Software de combate"],
        'preguntas': [
            {'q': '¿Qué tipo de soluciones forjarás para el Capitolio (Web y...)?', 'a': 'móvil'}, 
            {'q': '¿Cómo se llaman las armas que funcionan en múltiples sistemas operativos?', 'a': 'multiplataforma'} 
        ],
        'siguiente': 'timeline'
    },
    'timeline': {
        'titulo': 'El Gran Reloj de la Arena',
        'lore': 'El tiempo es el enemigo más peligroso. Conoce las fechas de las batallas finales.',
        'info': '1P: 02-06-26. 2P: 07-07-26. 3P: 11-08-26. Gran Final: 17 de Agosto.',
        'pool': ["02-06 de la Cosecha", "31 de Diciembre", "Día 17 del Sinsajo", "En el invierno", "Año 2027", "Día 02 del Distrito"],
        'preguntas': [
            {'q': '¿En qué fecha (DD-MM-YY) es la primera batalla del parcial?', 'a': '02-06-26'}, # 02-06-26
            {'q': '¿Qué día de agosto se decide el Vencedor en el examen Final?', 'a': '17'} # 17-08-26
        ],
        'siguiente': 'victoria'
    },
    
    # ESTA ES LA PARTE QUE FALTA:
    'victoria': {
        'titulo': '¡Vencedor de la Asignatura!',
        'lore': 'Has sobrevivido al cuatrimestre Mayo-Agosto 2026. El Maestro Guerra te saluda.',
        'info': 'Has demostrado conocer el Plan de Asignatura y la Guía del Estudiante.',
        'preguntas': [], # Sin preguntas para este nivel
        'siguiente': None
    }
}

def generar_opciones(respuesta, pool, cantidad=3):
    # Selecciona distractores y los mezcla con la respuesta correcta
    distractores = random.sample([d for d in pool if d != respuesta], cantidad - 1)
    opciones = distractores + [respuesta]
    random.shuffle(opciones)
    return opciones

@app.route('/')
def inicio():
    session['fase'] = 'reglas'
    nivel = ARENA['reglas']
    session['opciones'] = [generar_opciones(p['a'], nivel['pool']) for p in nivel['preguntas']]
    return render_template('inicio.html', nivel=nivel, opciones=session['opciones'])

@app.route('/avanzar/<actual>', methods=['POST'])
def avanzar(actual):
    nivel = ARENA[actual]
    ans0 = request.form.get('ans0')
    ans1 = request.form.get('ans1')
    compromiso = request.form.get('compromiso')

    if ans0 == nivel['preguntas'][0]['a'] and ans1 == nivel['preguntas'][1]['a'] and compromiso:
        proximo = nivel['siguiente']
        session['fase'] = proximo
        if proximo != 'victoria':
            prox_nivel = ARENA[proximo]
            session['opciones'] = [generar_opciones(p['a'], prox_nivel['pool']) for p in prox_nivel['preguntas']]
        return redirect(url_for('jugar_nivel', nivel_id=proximo))
    else:
        # SI FALLA: Se vuelven a generar 3 opciones aleatorias para confundir
        session['opciones'] = [generar_opciones(p['a'], nivel['pool']) for p in nivel['preguntas']]
        return render_template('inicio.html', nivel=nivel, opciones=session['opciones'], 
                               error="¡Respuesta incorrecta! La Arena ha cambiado.")

@app.route('/nivel/<nivel_id>')
def jugar_nivel(nivel_id):
    return render_template('inicio.html', nivel=ARENA[nivel_id], opciones=session.get('opciones'))

if __name__ == '__main__':
    app.run(debug=True)