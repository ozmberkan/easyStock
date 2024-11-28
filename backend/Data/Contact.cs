namespace backend.Data
{
    public class Contact
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Title { get; set; }
        public string? Message { get; set; }
        public string? Status { get; set; } = "pending";
        public DateTime CreatedAt { get; set; }

        public Contact()
        {
            CreatedAt = DateTime.Now;
        }
    }
}