using System.Collections.Generic;
using System.Threading.Tasks;
using DatingApp.API.Models;

namespace DatingApp.API.Data
{
    public interface IDatingRepository
    {
        //adding a generic method, Add a type of T, here T is of type User or Photo, it takes the entity as its param
        //here T is constained to Type of Class
        //this allows us to save some typing, instead of creating seperate methods for User and Photos
        void Add<T>(T entity) where T: class;
        void Delete<T>(T entity) where T: class;
        Task<bool> SaveAll();
        Task<IEnumerable<User>> GetUsers();
        Task<User> GetUser(int id);
    }
}