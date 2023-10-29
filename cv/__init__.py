from flask import Flask
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/api/hoja-de-vida', methods=['GET'])
def obtener_hoja_de_vida():
    hoja_de_vida = {
        'nombre': 'Jose Fernando Campos S.',
        'profesion': 'Ingeniero de Sistemas (Backend)',
        'resumen': 'Hola a todo como estamos ',
        'experiencia': ['Trabajo 1', 'Trabajo 2'],
        'educacion': ['Escuela 1', 'Universidad 2'],
    }
    print(hoja_de_vida)  # Agrega esta línea para verificar
    return jsonify(hoja_de_vida)

# Ruta para recibir mensajes de contacto


@app.route('/api/contacto', methods=['POST'])
def recibir_mensaje_de_contacto():
    datos = request.get_json()  # Esperamos un JSON con 'nombre', 'correo', y 'mensaje'
    nombre = datos.get('nombre')
    correo = datos.get('correo')
    mensaje = datos.get('mensaje')
    # Aquí puedes procesar el mensaje o enviar un correo
    return jsonify({'mensaje': 'Mensaje recibido correctamente'})
