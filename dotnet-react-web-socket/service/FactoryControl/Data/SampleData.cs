using System.Collections.Generic;

namespace FactoryControl.Data
{
    public static class SampleData
    {
        // Mock data
        public static List<Factory> FactoryList = new List<Factory>();

        public class Factory
        {
            public int Id { get; set; }
            public string Timestamp { get; set; }
            public int Price { get; set; }
            public string Message { get; set; }
        }
    }
}
