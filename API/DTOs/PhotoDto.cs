namespace API.DTOs
{
    public class PhotoDto
    {
        public int Id { get; set;}
        #nullable enable
        public string? Url { get; set;}
        #nullable disable
        public bool IsMain { get; set;}
    }
}