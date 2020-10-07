# Write the code to find:
# How much Greg scored in their first Biology exam.
# How much Sarah scored in their last Maths exam.
# The highest score Thomas achieved in Maths throughout the year.
# The quarter that Greg achieved his lowest score in Biology in the year.
# The average of Sarah's scores in Maths for the whole year.

require "pry"

exam_results = {
    greg: {
        biology: [90, 75, 23, 60],
        maths: [100, 80, 30, 45]
    },
    Sarah: {
        biology: [70, 65, 80, 95],
        maths: [80, 77, 64, 90]
    },
    thomas: {
        biology: [40, 60, 75, 98],
        maths: [36, 50, 67, 82]
    }
}

puts "Gregs first Biology exam #{exam_results[:greg][:biology][0]}"
puts "Sarah's last Maths Exam #{exam_results[:Sarah][:maths][-1]}"
puts "Thomas's highest Maths score #{exam_results[:thomas][:maths].max}"
gregs_bio_scores = exam_results[:greg][:biology]
gregs_lowest_bio_score = gregs_bio_scores.min
puts "Gregs lowest biology score was in quarter #{gregs_bio_scores.index(gregs_lowest_bio_score) + 1}"
puts "Sarahs average Math score was #{exam_results[:Sarah][:maths].sum / exam_results[:Sarah][:maths].length}"


binding.pry
