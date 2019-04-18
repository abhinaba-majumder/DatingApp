using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        //data annotations are used above the properties we want to validate
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(8, MinimumLength=4, ErrorMessage="You must specify Password between 4 and 8 characters")]
        public string Password { get; set; }
    }
}