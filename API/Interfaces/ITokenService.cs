using API.Entities;

namespace API.Iterfaces
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);
    }
};