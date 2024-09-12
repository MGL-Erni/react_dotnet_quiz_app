using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QuizAPI.Models
{
    public class Question
    {
        // using GUID rather than int ID, better practice
        [Key]
        public Guid QnId { get; set; }

        // limit the questions to 250 characters each
        [Column(TypeName ="nvarchar(250)")]
        public string QnInWords { get; set; }

        // just get images from URLs
        public string? ImageName { get; set; }

        // limit each option to 100 characters each
        [Column(TypeName = "nvarchar(100)")]
        public string Option1 { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Option2 { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Option3 { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Option4 { get; set; }

        public int Answer {  get; set; }
    }
}
