﻿using System;
using System.Collections.Generic;

namespace Mate.Speak.Models
{
    public partial class Calificacion
    {
        public Calificacion()
        {
            Datos = new HashSet<Dato>();
            Salas = new HashSet<Sala>();
        }

        public int IdCalificacion { get; set; }
        
        public string? Calificacion1 { get; set; }
        
        public string? Rol { get; set; }
        
        public string? Sala { get; set; }
        
        public int? NroCalificacion { get; set; }
        
        public string? FacilComprender { get; set; }
        
        public string? AcordeNivel { get; set; }
        
        public string? CalidadRecursos { get; set; }
        
        public string? Duracion { get; set; }
        
        public string? TemarioActualizado { get; set; }
        
        public string? CalidadComunica { get; set; }
        
        public string? InteracionaEstudiantes { get; set; }
        
        public string? Retroalimentacion { get; set; }
        
        public string? ContestaConsulta { get; set; }
        
        public string? Otro { get; set; }
        
        public string? Comentario { get; set; }

        public virtual ICollection<Dato> Datos { get; set; }
        public virtual ICollection<Sala> Salas { get; set; }
    }
}
