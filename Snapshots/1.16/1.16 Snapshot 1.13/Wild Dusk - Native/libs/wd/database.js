'use strict';
var LocalDb = {
  Users: {
    Located: {
      AL56AF50: {
        username: "AL56AF50",
        password: "Native",
        rank: 4,
        level: 4,
        gen: {
          key: "607678aa7d7526cbf3b3dac1651c9f72",
          uuid: "",
          id: "0",
          s: "m"
        }
      },
      Alexltx: {
        username: "Alexltx",
        password: "Alextri00",
        rank: 4,
        level: 4,
        gen: {
          key: "317f75c6f70ce2a03cc9946b41cde563",
          uuid: "",
          id: "1",
          s: "m"
        }
      },
      AliciaLove14: {
        username: "AliciaLove14",
        password: "AliciaLove821",
        rank: 2,
        level: 2,
        gen: {
          key: "d3232772321db22c403513cbd74b8df4",
          uuid: "",
          id: "2",
          s: "f"
        }
      },
      ChloeNozek: {
        username: "ChloeNozek",
        password: "TeAmoAlvarito7u7",
        rank: 2,
        level: 2,
        gen: {
          key: "0c6d7a16e21a275f04a77a4e3ea9399d4",
          uuid: "",
          id: "3",
          s: "f"
        }
      },
      MartinaRC: {
        username: "MartinaRC",
        password: "marturc14",
        rank: 2,
        level: 2,
        gen: {
          key: "6943a881d2b2af1eec9194acaf6977e23",
          uuid: "",
          id: "4",
          s: "f"
        }
      },
      rcon: {
        username: "remoteconsole",
        password: "rcon1234",
        rank: 3,
        level: 2,
        gen: {
          key: "",
          uuid: "",
          id: "----------------------------------",
          s: "b"
        }
      }
    },
    get: ["AL56AF50", "Alexltx", "AliciaLove14", "ChloeNozek", "MartinaRC"]
  },
  Version: {
    get: {
      all: ["Submarine", "Feather", "Marble", "Bucket", "Core"],
      Submarine: {
        vName: "Submarine",
        vValue: {
          Major: 1,
          Minor: 16,
          Patch: 0,
          Beta: 0
        },
        vParse: "1.16",
        getDay: function () {
          var d = new Date();
          d.setDate(17);
          d.setFullYear(2017);
          d.setMonth(0);
          var n = d.toLocaleDateString();
          return n;
        },
        features: ["Mejoras en esta actualizacion:", "Informacion almacenada en la base de datos.", "Mejoras visuales del render.", "Reconstruccion de base de datos.", "Reconstruccion de controladores.", "Reconstruccion de funcionalidades."],
        changes: ["- Nueva UI.", "Estabilizacion de la base de datos.", "Mejoras en Controladores.", "Nuevas funciones.", "Render mejorado.", "Compatibilidad para APIs menores de 18."],
        info: ["Esta actualizacion ha sido rediseñada para destruir todas las versiones anteriores, generando una vista completamente nueva y compatible para versiones con API de nivel menor a 18."]
      },
      Feather: {
        vName: "Feather",
        vValue: {
          Major: 1,
          Minor: 15,
          Patch: 0,
          Beta: 0
        },
        vParse: "1.15",
        getDay: function () {
          var d = new Date();
          d.setDate(7);
          d.setFullYear(2017);
          d.setMonth(0);
          var n = d.toLocaleDateString();
          return n;
        },
        features: ["Mejoras en esta actualizacion:", "Inicio de Sesion forzado.", "Nueva vista. Informacion de usuario generada en carga.", "Administracion de usuario por medio de uuid.", "Inicio de sesion requerido para ejecutar algunas funciones.", "Nuevos controladores integrados."],
        changes: ["- Batch autorun.inf eliminado.", "Permisos de acceso explicitos.", "Nueva interfaz de usuario.", "Control de usuarios con uuid."],
        info: ["Esta actualizacion trae nuevas funcionalidades y mejoras en la seguridad de la aplicacion para los usuarios. Se les fuerza a los usuarios a iniciar sesion antes de proceder a la pagina de control de cuentas. Se han agregado nuevos controladores de usuarios para la manipulacion de sus actividades."]
      },
      Marble: {
        vName: "Marble",
        vValue: {
          Major: 1,
          Minor: 10,
          Patch: 29,
          Beta: 0
        },
        vParse: "1.10.29",
        getDay: function () {
          var d = new Date();
          d.setDate(19);
          d.setFullYear(2016);
          d.setMonth(11)
          var n = d.toLocaleDateString();
          return n;
        },
        features: ["Mejoras en esta actualizacion:", "Inicio de Sesion habilitado.", "Verificacion de Usuario mejorado.", "Permisos de rangos en progreso.", "Controladores de usuario mejorados.", "Proceso de Cache introducido. (Beta)", "Error de notificacion reparado.", "Errores y estabilidad mejorada.", "Actualizados controladores basicos."],
        changes: ["- Acceso a usuarios por medio de LogIn.", "Manejo de cuentas de usuario en la base de datos.", "Controlador de eventos en usuarios.", "Almacenamiento en Cache temporal.", "Terminada la vista de usuario."],
        info: ["La actualizacion de Usuarios! Esta actualizacion aumenta la seguridad y el manejo de usuarios, inspirado para el uso de usuarios, nuevas caracteristicas seran agregadas en las siguientes actualizaciones."]
      },
      Bucket: {
        vName: "Bucket",
        vValue: {
          Major: 1,
          Minor: 0,
          Patch: 5,
          Beta: 0
        },
        vParse: "1.0.5",
        getDay: function () {
          var d = new Date();
          d.setDate(14);
          d.setFullYear(2016);
          d.setMonth(10)
          var n = d.toLocaleDateString();
          return n;
        },
        features: ["Mejoras en esta actualizacion:", "Inicio de Sesion para Usuarios agregado.", "Funciones de Sistema habilitados.", "Administrador de errores inicializado.", "Agregadas notificaciones en la aplicacion.", "Almacenamiento en base de datos habilitado.", "Mejoras basicas en la estabilidad."],
        changes: ["- Administracion por medio de base de datos. Habilitado el inicio de sesion.", "Notificaciones dentro de la aplicacion (BETA).", "Acceso a la base de datos."],
        info: ["Primer lanzamiento BETA del proyecto Wild Dusk. Nuevas funcionalidades agregadas."]
      },
      Core: {
        vName: "Core",
        vValue: {
          Major: 1,
          Minor: 0,
          Patch: 3,
          Beta: 5
        },
        vParse: "1.0.3b5",
        getDay: function () {
          var d = new Date();
          d.setDate(2);
          d.setFullYear(2016);
          d.setMonth(10)
          var n = d.toLocaleDateString();
          return n;
        },
        features: ["Mejoras en esta actualizacion:", "Debugging en consola.", "Acceso a funciones en fase beta.", "Controladores basicos de usuario agregados.", "Base de datos integrada. (No habilitada)", "Version estable. Sin depurar."],
        changes: ["Desconocido"],
        info: ["Desconocido"]
      }
    }
  }
};