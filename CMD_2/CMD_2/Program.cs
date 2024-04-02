using System;
using System.Linq;
using System.Text.RegularExpressions;

namespace CMD_2
{
    class Program
    {
        static void Main(string[] args)
        {
            while (true)
            {
                Console.ForegroundColor = ConsoleColor.White;
                Console.WriteLine("Zadej sekvenci čísel:");
                string input = Console.ReadLine();
                input = input.Replace(',', '/').Replace(' ', '/');
                input = input.Replace("//", "/");
                input = input.Replace('.', ',');

                string[] _numbers = input.Split('/');
                double[] numbers = new double[_numbers.Length];
                for (int i = 0; i < _numbers.Length; i++)
                    double.TryParse(_numbers[i], out numbers[i]);

                int currentStreak = 1;
                int maxStreak = 0;
                try
                {
                    for (int i = 0; i < numbers.Length - 1; i++)
                    {
                        if (numbers[i] <= numbers[i+1]) currentStreak++;
                        else currentStreak = 1;
                        if (currentStreak > maxStreak) maxStreak = currentStreak;
                    }
                    
                    Console.WriteLine($"Nejmenší číslo je: {numbers.Min()}");
                    Console.WriteLine($"Největší číslo je: {numbers.Max()}");
                    Console.WriteLine($"Délka nejdelšího vzestupného intervalu je: {maxStreak}");

                    while (true)
                    {
                        Console.WriteLine($"Pokračovat? [Ano/Ne]");
                        String continueLoop = Console.ReadLine().ToLower();
                        if (continueLoop == "ano") break;
                        else if (continueLoop == "ne") return;
                    }
                    Console.Clear();
                }
                catch(Exception ex)
                {
                    Console.Clear();
                    Console.ForegroundColor = ConsoleColor.Red;
                    Console.WriteLine("Zadán neplatný vstup");
                    Console.WriteLine(ex);
                }
            }
        }
    }
}