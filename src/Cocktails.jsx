import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Cocktails() {
  const [cocktailData, setCocktailData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    // URL de la API de cócteles
    const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
    axios
      .get(apiUrl)
      .then((response) => {
        const drinks = response.data.drinks;
        const groupedCocktails = [];
        // Dividir los cócteles en grupos de 8
        for (let i = 0; i < drinks.length; i += 8) {
          groupedCocktails.push(drinks.slice(i, i + 8));
        }
        // Establecer los cócteles en el estado
        setCocktailData(groupedCocktails);
      })
      .catch((error) => {
        console.error(
          "Error al realizar la solicitud a la API de cócteles:",
          error
        );
      });
  }, []);
console.log(cocktailData);
  const nextPage = () => {
    if (currentPage < cocktailData.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='w-[100%]'>
      {cocktailData.length > 0 && (
        <div>
          <div className="flex flex-col gap-2 h-[100%] w-[100%] items-center justify-center bg-[url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYZGRgaHBwcHBocHRwcHhocHBwcGhokHBwcIS4lHh4rIRoaJjgmKy8xNTU1HCQ7QDs0Py40NTEBDAwMEA8PGBERGjEdGB0xNDQ/NDExMTE0NDQ0ND8/MTQ0PzQxMTE/MTExNDExNDQxPzE/ND80NDExPz80PzExNP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBAUGB//EAD4QAAEDAQMJBwIFBAICAwEAAAEAAhEhAzFBBBJRYXGBkaHwBRNSscHR4SJCFDJikvEVgqLSU3IjM7LC4hb/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAXEQEBAQEAAAAAAAAAAAAAAAAAESEB/9oADAMBAAIRAxEAPwD6K0tuvnfVMazqK8hqXnsm7Sa8nNa7OBBIvodAvur6Lps7RZcSQdfsdiit+YBWk7d6W4Ridl6U3LWuoDI0VRnKG6a9akEGWMzs3PEtvE1E3SDdem2eWgffO/rWlPtmXk76qmvaRSeHyg1OyoeLZCB1tP3x6wklgNAP8Xe6JlnIoSBsPqUD25UfFxA9lTrU6eSz90Bjo+2EHdil87EEfnB0g0uIiKYYIcqyVj2gPaHajKssOg+XqpFbigB2TMcQS0Uuqea0tLBg1II1Hh8JgbdEdbkDgW6Bw+FGPbJAvABOoGQPI8EjNKsA6uHwsq0Ne1CbRqSXRoQGDh5+yDSLRunyUzhp8lnDGnCu9Qtwjh8ojU04cpCo7AdsJPditPNU5gCKIsOAHBCWEV6/lCYVSRBxFRiJuCIMOExW7y6CpkAm6uxYsrsznkVBLSWuF7TFDG2aa+MZnZskZtfy6gYnXMg0Vg6DycAhDziCspc7SjE6euKoJ43blTjNIndvUL9JQtdNUEcwGSZVOs8LlZeVGvWRmfYmvt8XrO/s4Ov4VXUzj0CgF+vYVocn/wDn7P8AVxcou53n6eRVoOfkXZoY2kl1ZMzOBAmB/C0si7DbN1NJlO70CPKuKzvcBBbF4muGKBpeK05A+ijLQR/I6+VZ/VjcOsFmLPqmABFNM7NyB/4g4Hl7qu9J+6m3Xo0USIr+U67431TGAYgctiAg87vmEwWhuHpzolPOgU2wrFLweJKCPtHUwxvQm0dt5UV5k4dcFTmAEGKb9GiNqADan8tNF45EJLLW0n6miK3PNf8ABOmpqJ0XHl7Ic0DGRhMTTigYXmL43R6orO2ImvW8obPCg4AI5aLy3ZRBTrcwJIQjKtYuvifIqOzTdyk+Sotp93AoKNsdI5eUhCMq2nRQH1RN0ZpG4+gTS7Ud4N/BBTcoNKztA9Crz6zJ5e6gv+B6hTO/7dbAgbZvM0Pl7qF+kdcEovAiSd8+pRPcJ+k+U+ayCzhqv60nXhcgtrQtEmgN2MnUBVUwQKGvCNwOxZzY/VMgmlSSbtHwgdZ5YIvmtRAN86p5JgdnadVNIA8gFnsmOrIH7vhNNLgTwK0CDL/X+UTp/n+VnbbHwmpig1SjtMorH1A67uaBTrUzEfTjWDOw03yjLgftdtlv+yR+IrWdYj3QOt8A0HcOgg2tA19b1ZM4nks7LSKkeyHvDP5abfYoNItGijTnb58yrfanwngs7xnCHChHidPFZm5MwXF/73D1QbO8d4TwUWWP+371EGrKrVrJzwYmgBH1GNHQmFGNY9pzcbvMRoM+Sf2hkAe0AkgtcHCIppvB1cEAsGhjWgUZcMb6854oFtYBdfrqrZaOEiQdvwiFkbxI0iJKjmSMOV+/fRBTJIqSDqlW6zOknjzWDKrXMIL3RnEAQDiQBcNmK1sfN08/UXoKLIwqbzfTYoyJiI3R5oyymnb8Iczjs6KCaau54bVBZ4md8b0PdGlYGIg15lU3JcBSuAGM4XcZQFaMB2/2g8kRbjF135Z8lTrE4OPAD0QOsHk/m2y2Z4mUBtdGM7S3rmis3C8ERrPlCFlk4RXdAEo4JxjrQgN19RzPoqcMa8flWJAvPJRk6+SCg39PNS0ZIuM7VIkY8kDLA4U2wgUxr7gD+70lMe92DXHePU+qMWB0+XmjZZHXxHsgT3jtDt/snB5vrsgBW3J8STsMK3MOn1WVA8VkUPDkhs3tJig2Y7NBSO1sr7myc/NL83CIvpJ1Cawldnve9j3uzc6QGtEQCQDUmp0TqOhEdIRMCLpupApfpS7ShjHrWjtLarnCv1EdbigY+ftpuWgINMetqrNabwOtJCNxERB03IA5vQQVmgXcgdqJrBoUgaEwNG9BRG1ALOMeXrATA0BUBd7lAJYL431UDdE9bQjcynzCJo4oEZv6zy9lE+upRZU99rTBItH6ufqtz2uijm7x7IAx+L2zwWkc/vSBdTRI91Ba7qafZbyx/jYEtwPjbtu24IMRt2mhLd+B680QyoaW36fhVaMOdTKWAeGGk8U4WbvGw7ggQcqrgeHmgflgGjiD5LawO8bd0BR2cPvbyQYvxcxHXOELsoOjkV0A53jajaXeNBy2ZS6v0ujYR6JjHuMfQW6CQTsuC6Lv+9UItNLzxhBic54+0nTMj/6oW5UdB3T6hb3ZSB9/F3yqGUSKPH7gUGQ5QP17mOPkFG5UInMtP2lbG2xn84414Iu8M/mHJBiZlGcCQ11NLT7K893hI2g+y2Zx8Z4U80eefH5DzKDnttXG4Ty8wp+Jdg08PdbXPPi5NSbZxrLy0f2iOSBIyo/cCNX8Km5WNB2geamTzH/tz9cN9AmgO8Q/aP8AVBTg14LTcaEeYhDbMaxjRg2ABqF3CFoAI+7kAi+rTxp6oOc7LWAXxt46UYypukaY+AnPGnN4A+6AWQP2tP8AaP8AVAh+VNFeQjigGXMi8acET3AfY3gPQJOe00zGxsagIZeybwiGXMOKFtgw/Y39rULskZ/xs/aEDXZey7OHWxQ9oN8QSRkrMbJo/tQOyWyuLG36EDn9os0tuVf1FniE7fdZrTJrL/jbGxC7I7ExFm2NY+UGn+os6JUWT8LZf8bP2j3VqQeqOSu8XL4UORuxceCp0+L0V2Z18KqgfwGtA/IDt3BaAdBjajB/USg8tl+S2Qe1j7Euc64hogTeSY1Dkt1n2Q0fa4bJ9Au2HDTzVOjxeSDlN7L1HgfZMZ2WPDPH2XQeweKOHqo1v6jxCDE3ssD7T1uUPZ51jd8LeW6CeKF+dgTxCDEez3aTwHsq/ppOP+LT6LWGO0njCtrDiTtlBhd2QDo4NTG9kD9I2QtZsNLt0o7OBjKDEey/1HrYULuyf1EcfUrfaZSGpf4qaeYQZR2a4XPPD5UPZz/GN7QfVa35S4XgcSPdB+Lxjy9UGQ9mvweNmaabaoX9lOcILmkaCwmeJW12Uybt1PRX32JFN3ug5TOwg27NGxseqNnY5/RwhdMW7cZ63om2zZ5IOd/TCMR5ov6Y/By3nKGDr4VG3ZpjfHGiDnu7NtJo8Aa5Pql/058/nG4H3XTOUN0jrcq/ENONd3sg5Vt2a+aPEa590P4C2Fzm7x8rsNtm4u8kTXt08wg4rskth9zBtZ8qxkNsfvZvb/8ApdhzmaeJ+ETbRtK8/hByRkdt4mU/Sf8AZQ5E/wATf2n/AGXXc8YETtEIe9Axpp9kHKPZrzWWb2n3VHs608TNwPo5dfvh4vlJtLaCBx+EHM/pr9Lef+yi7ea3Acc72UQYC469lNO1QWhwDuA/2hQxq8/RSlUBC3Pgd+0ecoxaG4t4j5SXO3qu+Ojy90Go2oi4bgJS324Aq3kPdZ22sYiusIzak4zzQWcpBiWmL6j5Rd6KkN5X8kt1oYiRwUFppu3oCfbtAAzJ3ehCp1uzweSo2g18/ZW106etyChldmPsjgiHaDBc08h6Ks/W7dKAvNdGwIHty5t2ad5lX+IaTccTuAJIGA0U0LNaWhFY4xTmltmRF5mpxOiu3mgC17TabcsMEOacyIo9v5mnSSKj/qVrEEAjG7b7JDuzmPh/5XSHbC0gidhB3UWo2Ym/qQTPNAbniWnOvaI1g3zSREbKpLmfqF+kY14JAsG5sGkRBqDWhqdBBd/ckNec0zGdMSDju8kG4iorhq0hF3WscfhZGvNDjuTHZSLz6BBoLYx4IojorL3orPtzQgkz7hBtY0FKcwaFnkpzbU4nregtzQcRvoEQs6UjzVm0ZFxJ1JeeZoCOaCPs924oHNA6+E0Z2jYltmakDUggYOq+Ss2Ix8480eIq0jGk+qY8Mi7gCgzd31wUFjXBOdmR+U9DahZGAjf8LIo2GxR1hrAV54mFUNNM07xTVIQB+HOnyURQMGRuCtaC3WRj8w5fKNrAL4rpPwhz3RceI9VA0nA8Y9aoGtsWxN2m+VRsWit+5JcHeEfuPupLsGka871QOcxopH+NeKINGgb5WLK7MuYZc5hNxDgMdKyWFhaAAZ+dEVe7OJjWg7GZqHW9Ubqim/2XNLLQeE/3Iv8AyRc2dqDcHagOPsjzuq+y5rWWkGQ3mOMGqtjX45p2GfMoNxYP5LkosacAdEF/osr2vwDcMfk+Sa4PwaDtJQG2zjSP7j6pobGjfj6LJ/5AfytG+u5NNs8faZ2jzJQPzziFQtRMeoWQ21ofs5t9/ZMsrZ4P1Agc+T0GmKdH4CV3Zg3dXyVZtj4Z3jyJorNqTggptnS718kTbEXmOtqIu6hTPGvragmYOvhQsHUhATXHkEbSNBnaPQygIWbEL4wHwqcREkHl7lQRQwUCzaAYDrco7KCMRzTXxgK6Af4Qsbx2oF99PRUc/wDSeHumOYP5cB5IHsN7RxKAe91dblTspUDDWAJ3e6hs36Bwb7oCD5uNdFSiFeiktY/RJ/t90wOfH5ObfQoCJPVFZnxa+oSXPfgwDePdJfbOB/8AW472f7INOa7xcgosvfWv/H5f7qKDo983QNVIUD9K0NYzRyRd23VwKoyh5IuBGs+yEP0MHW9be5ZoHBD3DdVNXzCDiZfamgdYF4kGmYQDpgmkIWWlP/U5uqh8luyl1oHgNsQ5mLpA5cE/MHh63oMFnaaWneE0P/TwC2jJpvCv8I3QOaDHnfp5Ig4HBaDkLdAG5C/s6dY4+iDPEXAnaPZW4g/wms7OYLxyARHs9mjyQIzNfL5VObr5H1K0NyNnhHD4T25GzwoOa0jx+aI7W8D7rojJ2aBy9lX4VpH5QNpQc+Bq/wAkPdgGQeZ8ytr7Jt2b6/ykOyVt+aN4CDK2MHNO8lG2tKU1phyNl5Z5qOyWzi4c0C3ObpPP2VOt2eJ3AlE7JLO7N8/dV+Csj9o5+6BDMus84th84kscAd8Qmd6w4HePfcrPZ1l4Qrb2dZeEc0FhzYnNO2XBGLRvRPslP7MsfA3h8oB2dZeEU8uKDU1wOgJgI0+SwO7NsbyGx1rRf06x8PBZG3OGqUDna+Sxv7NsfCeaX/TrKv0nX0VYOg21NKhV3mtc5nZdnQ5tOsU45HYj7KpBpcaRndcUslunzSHZJZG5vom2fZlnBzpFMK/KgkjxKJf9OscRzIVoOm23gwQBrAPor/FDSBOqvNazkw0zuKF1k048vlaGdtpP3A8D5b0Xe6+V5THWQoDB2gb1TrBpvAOExVAbJ8Q4IC8i4j9qNtgBdTcPOFXcV+B7IF9+dI4JjbUnEc0QsREZw5DjRWwCJFNI/gIBc8+I+fogLsfhMDpJj1Iu2wcExrB7xH8oMhzsOt6YLN5TqA3TyRi0BoQBWB+qk8L+CDMLNwxRZ0UITn7ZpjWm9A4zfHWxBnc8a+aF7054GIjilOsxeDukU5IFOtAAq78afNOzAKfTy9kD2DVf1WEA/iRfnDmqFoDiOI+VTmNgjCCh7plJi4Gsa9dDcgp7weh6IGsbifJNLbO7Ob+5E1jIpHFt3EoFtDNPkmS2PYj1QPyNjpJArSp+VbckaTMVukEU/wAkBBzcJnVmq3DV5KvwhERzJ2XTX5S35HN5E3+U1xQBbRIpE7L1ZtIF7d5hWzJ2mjS2RSkHHaaRsQ22ShpwicQZroIOmaIEuygYhgJgkB3zUx5pb7Vz6to3Ts2lXbWDQ3ObcSSCaa6SL76a0u1eM+QwzpmNEaaToQGA9rQTBPWjFJZlUVIG06VYtc8gAEbp/wDkY/hIeS24jXx64INBcSRAg6MdNKI2WtYmqwMtnTfQGlXcFrZlcn6gL6UkcgJQaM86fP3Vqu8Zr5KLI7cfp8/dA8/pO+fVD+FfpFdvsjGTv8XD+FoCXnwcvhKc83izqNV23amuyd4+/wAvZQNeCJfI0EeRAQKFq7wV1gb8ULrZ8mGYDR6ldAAxJdylR1mdM7oQc5uUPkyyBpgV0IhlLp/IROloOF/WpaTZuwjRiEvKc+IpWBeaE8ECrC3deWVNbp57FrfbUkUHrPIb1nBe37TuIuwuN6EZRNHBw/7NNyDnZdkeUuyhpbaxZgi4/UQGkkEAVqNiZ+FygkZ1oBBkGNEXAXzBPQRu7Rsy7Nc6M00JB1XU0Ley3afvBGqPUoMVpk1pNModX9LfZWA9v5nz/wBg0caLogDbvlCwjARjz0gIMXem+W6cPfqERccY62LT3baztvPko8NpLRqiadbkCWwaZw3AnToHUIHWsileIRi+4742KFwm7yPQQZ3l+EV0z7KWbnZxJE0HqERtopmmYn5403I892caGIEX8kFOFatBG7ekvY3wA10fC2PbjHnoUe0CpOE3E8KIMZsWOoWADGRRMGRsiMz/ACI5bkbnHxAbP4QvtX5tHCb/AM2G5vJADsmzT9DiNFZrj5pZye1ij2GZmGieSNtu+QJnVx0wn2mU3AxSm/cUCLJpYIMZziJj6dm9cbLMtPekOLrKDW4tkGKSLq6l2nZQ1zYzZ4+UrH2lkbLYAF1MRTm4V06UFu7RLWh5LSHgTePqo2mEGnFZrbK5JObGsVGuS3qiRb5A82eY2YkAguBgAgzOIgXX6VoNg2Ghzi6BEN+lojTESUMRvaLZccxzouht2hIdlAcfyOnWHCdsBan2TAIawaa1k71ne0GKBEQ2TYvjf6GNaFzW+ODsRhgxaOt6A2DT9vn6BFKzGeIcArTvwrPAOapB6nOd4Z4+6s2j/Cj704nyV991AQKhxw4hNNmYFdn0z6ou+GvkqFoJxQRkgVjVSMNqp73TcNX0k+qsvE09FC+/5QLz36v2lLc90zHGaRuxiU5zhdF+s1uHWxE4jolAhr3YgDjvVhxm8I3upQV1Eqs3GvFBmt3AEENaSaXVH8pbcofNQ2No9SnW8UJ03SkEGdUINDXzWaR+k+gMJLWB4zmkwQCPqcBgRq4ImGKivxyUZlEEQwX4crkGgMAkEhCGNNZHHoYqu/dQwBpF8dXJb7aP4n1QGbMXyY3e6SLEZzvrIugT1ouTbO2kUgH/AKgeqW97zNRdeB6YIDbZSILgY2eiEsgyLs0zQG7TXWisz9NXckNo3XOmKbOpQC2wbfMa4xOwI2AAVfsoafCW5gIqJhR1k2vxHmgM2zZ/MNpGrahmzJoWcBXdKoWYvpW+72UNiOqIKdZsmjwBpivGEL7FsH6p3eyj7FsITZiYE77q79SBX4es5wnDo7VntLF7SS07Lo5LW2ybfWlL/bqiUWHA8ggXaW73ACBTRTnNRqWWys31kddaE/8ADu17qeiayx0jnwlEKZZ7Ntd94Ct9kRj5p+VZLnNLYcAcQYIpfIQ5LkxYxrZLoEayYrI24a0UjNztPBEbCcDvW0WYTe4nTGnBBy/woUXW7kaW9blEDzlFlMF1djvZFZ21ng7k72VKIvRugadx90TGAbetaiiIFzxWJJwF1dqy5BlFq4fXZBhk/cHbLlFEGkvqZB04XV6jWiInDmoogkauuKkx9p5e6iiBThqM3i7feVlzxIAaeXnKiiBzdhG9W1jSYhRRAXdg1LQdsFC7NxF6iiCgG4C7rQjDhoHr5KKIKNsNXD4SrS0aa6NQ9QoogploDjxHsoLUYGm/1CiiAy9uMEX4+yovbppv9lFEAvYDr2EjUoS2Ig3aZUUQZXZaxtDnTfTySHdqWYwdA1DHeoogO07TZALWuM0rGO9YndswSMw/4+6iiqI7t2LhTCQPQqrPtgzVuq/4UUUVD21q5X801nbB0UUUQdGz7coKO4j2UUUQf//Z')]">
            
            <div className="flex flex-wrap flex-row gap-2 items-center w-[100%] justify-center">
              {cocktailData[currentPage].map((drink, index) => (
                <div key={index} className="m-2 flex flex-col items-center"> 
                  <Link to={`/details/${drink.idDrink}`}><img
                    className="object-cover md:w-[15rem] w-[10rem] h-[10rem] md:h-[15rem] rounded-2xl hover:scale-90"
                    src={drink.strDrinkThumb}
                    alt={drink.strDrink}
                  /></Link>
                  <b className='text-xl'>{drink.strDrink}</b>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-5">
            <button
              type="button"
              className="font-bold text-white mb-[1rem] bg-gradient-to-r from-gray-400 to-gray-700 hover:from-gray-500 hover:to-yellow-500 rounded-xl h-[2rem] w-[6rem]"
              onClick={prevPage}
            >
              Prev
            </button>
            <button
              type="button"
              className="font-bold text-white mb-[1rem] bg-gradient-to-r from-gray-400 to-gray-700 hover:from-gray-500 hover:to-yellow-500 rounded-xl h-[2rem] w-[6rem]"
              onClick={nextPage}
            >
              Next
            </button>
          </div>
          </div>
        </div>
      )}
    </div>
  );
}
